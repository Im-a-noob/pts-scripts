main();

function main() {
     if(app.documents.length <= 0) {
    	return false;
     }
    
    f = new File;
    f.changePath(Folder.desktop);
    file_obj = f.openDlg("Open guides", "Text file:*.txt");
    if(file_obj != null) {
        file_obj.open('r')
        while(!file_obj.eof) {
            line = file_obj.readln();
            parts = line.split(',');
            if(parts[0] == 'Direction.HORIZONTAL')
                activeDocument.guides.add(Direction.HORIZONTAL, parts[1]);
            else
                activeDocument.guides.add(Direction.VERTICAL, parts[1]);            
        }
        file_obj.close()
    }
    f.close()
    alert('Loaded guides from file!');
}