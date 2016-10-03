angular.module('appcifra',['ngRoute','ngCordova','menu','footerFix','favourite','search'])

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        this.onDeviceReady();
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //document.addEventListener("deviceready",load,false)

        // function load() {
        //     download("http://gama-ca.com.br/guia-in/gama-guia.pdf",'data','teste');
        // }
        app.receivedEvent('deviceready');
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};
app.initialize()


 function download(URL, Folder_Name, File_Name) {
//step to request a file system 
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);

    function fileSystemSuccess(fileSystem) {
        var download_link = encodeURI(URL);
        ext = download_link.substr(download_link.lastIndexOf('.') + 1); //Get extension of URL

        var directoryEntry = fileSystem.root; // to get root path of directory
        directoryEntry.getDirectory(Folder_Name, { create: true, exclusive: false }, onDirectorySuccess, onDirectoryFail); // creating folder in sdcard
        var rootdir = fileSystem.root;
        var fp = rootdir.toURL();  // Returns Fulpath of local directory

        fp = fp  + Folder_Name + "/" + File_Name + "." + ext; // fullpath and name of the file which we want to give
        // download function call
        filetransfer(download_link, fp);
    }

    function onDirectorySuccess(parent) {
        // Directory created successfuly
        //alert("achei")
    }

    function onDirectoryFail(error) {
        //Error while creating directory
        //alert("Unable to create new directory: " + error.code);
    }

    function fileSystemFail(evt) {
        //Unable to access file system
        //alert(evt.target.error.code);
     }
}

function filetransfer(download_link, fp) {
    var fileTransfer = new FileTransfer();
    // File download function with URL and local path
    fileTransfer.download(download_link, fp,
            function (entry) {
                // alert("download complete: " + entry.toURL() );
            },
         function (error) {
             //Download abort errors or download failed errors
             // alert("download error source " + error.source);
             // alert("download error target " + error.target);
             // alert("upload error code" + error.code);
         }
    );
}