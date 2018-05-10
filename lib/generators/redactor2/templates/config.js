$(function () {
    // Pass authenticity_token
    var params = '[name="authenticity_token"]';
    // Set global settings
    $.Redactor.settings = {
        //plugins: ['source', 'fullscreen', 'textdirection', 'clips'],
        imageUpload: '/redactor2_rails/images',
        imageData: {
          elements: params
        },
        fileUpload: '/redactor2_rails/files',
        fileData: {
          elements: params
        },
    };
    // Initialize Redactor
    $('.redactor').redactor();
});
