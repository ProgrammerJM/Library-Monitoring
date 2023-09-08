# To make the website connected to your googlespreadsheet
# 1. Create a blank google spreadsheet
# 2. Go to Extensions > Appscript
# 3. Paste this code to Code.gs
    <!-- var sheetName = 'Sheet1'
    var scriptProp = PropertiesService.getScriptProperties()

    function intialSetup () {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    scriptProp.setProperty('key', activeSpreadsheet.getId())
    }

    function doPost (e) {
    const lock = LockService.getScriptLock()
    lock.tryLock(1000)

    try {
        const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
        const sheet = doc.getSheetByName(sheetName)

        const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
        const nextRow = sheet.getLastRow() + 1

        var newRow = headers.map(function(header) {
        return header === 'Date' ? new Date() : e.parameter[header]
        })

        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

        return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    catch (e) {
        return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    finally {
        lock.releaseLock()
    }
    } -->
# 4. Save and Run
# 5. Go to Triggers 
    <!-- Add Trigger
    Choose which Function to Run to  'doPost' 
    Select Event Source 'From Spreadsheet' 
    Save -->
# 7. Deployment > 
    Click Deploy
    New Deployments
    Select type: 'Web app'
    Who has access: 'Anyone'
    Deploy
    Copy and Save the Web app 'URL'
# 9. In Script.js
    Paste the URL to ScriptURL = 'URL'
# 10. Done!