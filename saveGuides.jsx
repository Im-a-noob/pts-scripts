main();

function main() {
     if(app.documents.length <= 0) {
    	return false;
     }
 
    f = new File;
    f.changePath(Folder.desktop);
    file_obj = f.saveDlg("Save guides", "Text file:*.txt");
    if(file_obj != null) {
        file_obj.open('e')
        for(i = 0; i < activeDocument.guides.length; i++) {
            file_obj.writeln(activeDocument.guides[i].direction + ',' + activeDocument.guides[i].coordinate);
        }
        file_obj.close()
    }
    f.close()
}