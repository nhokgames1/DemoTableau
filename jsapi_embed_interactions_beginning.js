// Initialize the viz variable
var viz;
var vizUrl = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
window.onload= function() {
  // When the webpage has loaded, load the viz
var placeholderDiv = document.getElementById("Viz");
var url = "https://dub01.online.tableau.com/t/testingaia/views/GoogleAnalytics/OverallTrends";
var workbook, sheets, activeSheet ;
var options = {
  hideTabs: false,
  hideToolbars: false,
  width: "980px",
  height: "600px",
            onFirstInteractive: function () {
                workbook = viz.getWorkbook();
                activeSheet = workbook.getActiveSheet();
            }

};
viz = new tableauSoftware.Viz(placeholderDiv, url, options);
};
// Switch the viz to the sheet specified
 function switchTo(sheetName) {
   var workbook = viz.getWorkbook();
 	workbook.activateSheetAsync(sheetName);
 }
 // Filter the specified dimension to the specified value(s)
function show() {
   var sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Country");
  sheet.applyFilterAsync("Region","Asia",tableau.FilterUpdateType.REPLACE);

}

function filterDate() {
   var sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Country");
  sheet.applyFilterAsync("Date",{
        min:new Date(Date.UTC(2014,11,1)),
        max:new Date(Date.UTC(2014,12,1))
  },tableau.FilterUpdateType.REPLACE);

}
function exportPDF() {
  viz.showExportPDFDialog();
}
function exportImage() {
  viz.showExportImageDialog();
}
// // Select the marks that have the specified value(s) for the specified dimension
// function selectMarks(filterName, values) {
//
// }
