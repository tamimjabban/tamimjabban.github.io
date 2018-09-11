$(document).ready(function () {


    $('#mygallery').lightGallery({
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        mode: 'lg-fade',
        selector: 'a',
        cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)'
    });
    // mogrify -geometry x250 *.jpg
    // mylist = os.listdir(path)
    // newlist = [];
    // for x in mylist:
    //     newlist.append('<a href="img/gallery/big/'+x+'"><img src="img/gallery/thumb/'+x+'"/></a>')
    // for x in newlist:
    // print(x)
});