/** ham menu */
$(".ham-menu, .close-menu").click(function() {
    $("body").toggleClass("open");
})

/** add to wishlist functionality */
let _url_origin = window.location.origin;
let _wishlist_arr = sessionStorage.getItem('wishlist') !== null ? JSON.parse(sessionStorage.getItem('wishlist')) : [];
let _email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let _name_flag = false;
let _email_flag = false;

$(document).ready(function() {
  /** change widget icon for mobile screens */
  // if(window.innerWidth < 768) {
  //   $(".wishlist-open-icon").attr("src", "https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/612f54ea417a6d46a8259829_favorite.png");
  // }
  
  /** review slider */
  $(".review-wrapper, .prev-works-wrapper, .customer-favourite-wrap").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610249ab428d1346a2f97bd4_arrow-prev.png' alt='prev' class='arrow-prev' />",
    nextArrow: "<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610249ab95f71c0530a112cc_arrow-right.png' alt='next' class='arrow-next' />",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $(".review-product-wrapper").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610249ab428d1346a2f97bd4_arrow-prev.png' alt='prev' class='arrow-prev' />",
    nextArrow: "<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610249ab95f71c0530a112cc_arrow-right.png' alt='next' class='arrow-next' />",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  /** shop slider */
  $(".shop-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610249ab428d1346a2f97bd4_arrow-prev.png' alt='prev' class='arrow-prev' />",
    nextArrow: "<div class='get-direction w-inline-block'><div class='pos-relative'>Next Location</div><img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/611ce8bf5170c220f4db04c4_back%201.png' alt='' class='get-direction-icon'></div>",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  /** specialities slider */
  if(window.innerWidth < 768) {
    $(".speciality-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: "<div class='get-direction prev w-inline-block'><img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/611ce8bf5170c220f4db04c4_back%201.png' alt='' class='get-direction-icon'><div class='pos-relative'>Prev</div></div>",
      nextArrow: "<div class='get-direction next w-inline-block'><div class='pos-relative'>Next</div><img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/611ce8bf5170c220f4db04c4_back%201.png' alt='' class='get-direction-icon'></div>",
      init: setTimeout(() => { changeToNextPrevText() }, 1000),
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true
          }
        }
      ]
    });

    /** step slider */
    $(".delivery-process-wrapper .grid-2").slick({
      dots: false,
      infinite: false,
      speed: 300,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: "<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610249ab428d1346a2f97bd4_arrow-prev.png' alt='prev' class='arrow-prev' />",
      nextArrow: "<div class='get-direction w-inline-block'><div class='pos-relative'>Next Step</div><img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/611ce8bf5170c220f4db04c4_back%201.png' alt='' class='get-direction-icon'></div>",
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          }
        }
      ]
    });
  }

  if(window.innerWidth < 768) {
      $(".product-carousel").slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610249ab428d1346a2f97bd4_arrow-prev.png' alt='prev' class='arrow-prev' />",
        nextArrow: "<div class='get-direction w-inline-block'><div class='pos-relative'>Next</div><img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/611ce8bf5170c220f4db04c4_back%201.png' alt='' class='get-direction-icon'></div>",
        // init: setTimeout(() => { changeToNextText() }, 1000),
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });
  }

  $(".speciality-slider").on("afterChange", function (){
    changeToNextPrevText();
  })
  /** product slider */
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: '<img src="https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/61091946f96821867de06763_arrow-left-sm.png" alt="left arrow" class="product-prev" />',
    nextArrow: '<img src="https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610919455cbe63ae9a1742c0_arrow-right-sm.png" alt="right arrow" class="product-next" />',
  });

  /** sticky nav */
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 86) {
      $(".custom-nav-header").addClass("is-fixed");
    } else {
      $(".custom-nav-header").removeClass("is-fixed");
    }
  });

  /** activate nav */
  let _url = window.location.href;
  $(".custom-nav-menu a").each(function() {
    var _menu = $(this).text().toLowerCase();
    if(window.location.href.indexOf(_menu) !== -1 && window.location.href.indexOf("blog-category") === -1 && window.location.href.indexOf("post") === -1) {
        $(this).addClass("w--current");
    }
  })

  /** my wishlist */
  $(".open-my-wishlist, .wishlist-open-close").click(function() {
      $(".wishlist-container").toggleClass("active");


      $(".wishlist-title").text("My Touch List");
      $(".wishlist-form-block").hide();
      $(".wishlist-product-list").show();

      let _items = sessionStorage.getItem('wishlist') !== null ? JSON.parse(sessionStorage.getItem('wishlist')) : [];
      if(_items.length) {
        $(".wishlist-save").show();
      }
  })

  /** pre filled wishlist */
  if(_wishlist_arr.length) {
        let append_to_html = '';
      for(let i=0; i<_wishlist_arr.length; i++) {
          append_to_html += '<li class="wishlist-item">'+
            '<div class="wishlist-number">'+ (i+1) +'</div>'+
            '<a href="'+ _wishlist_arr[i].url +'" class="wishlisted-product-thumb w-inline-block"><img src="'+ _wishlist_arr[i].image +'" alt="'+ _wishlist_arr[i].product +'" /></a>'+
            '<a href="'+ _wishlist_arr[i].url +'" class="wishlisted-product w-inline-block">'+
              '<div class="wishlisted-product-title">'+ _wishlist_arr[i].product +'</div>'+
          '</a>'+
          '<div title="Remove" class="remove-wishlist-item" onclick="removeItemFromWishlist(this)">'+
              '<img src="https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610a395a792530831eaafa07_cl.png" loading="lazy" alt=""/>'+
          '</div></li>';
      }
        $(".my-wishlist").append(append_to_html);
        $(".empty-wishlist").hide();
        $(".wishlist-save").css('display', 'block');
        setTimeout(() => {
          changeWishlishNumberBG();
        }, 60000);
        
        if(window.innerWidth > 767) {
            $(".top-header-menu-link.open-my-wishlist").text("My Touch List ("+ _wishlist_arr.length +")");
            $(".wishlist-item-count").text(_wishlist_arr.length).show();
        } else {
            $(".top-header-menu-link.open-my-wishlist").html("<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/61028688400af896c613eb68_heart.png' alt='' /><span>("+ _wishlist_arr.length +")</span>");
            $(".wishlist-item-count").text(_wishlist_arr.length).show();
        }
  }

  /** add product on click from product listing pages */
  addToWishlistInit();
  function addToWishlistInit() {
    $(".add-to-wishlist").click(function() {
        $(".empty-wishlist").hide();
        //$(".wishlist-form-block").show();
        $(".wishlist-save").css('display', 'block');

        let _product_image = $(this).parents(".product-box").find(".product-image").attr("src");
        let _product_name = $(this).parents(".product-box").find("h3.entry-title").text();
        let _temp_url = $(this).parents(".product-box").find(".product-image-wrapper").attr("href");
        let _product_url = _url_origin + _temp_url;

        addItemToWishlist(_product_image, _product_name, _product_url);
    })
  }

  /** watch for product addition on click load more button */
  $(".load-more-button").click(function() {
      $('.laminate-list').bind('DOMSubtreeModified', function(e) {
        if (e.target.innerHTML.length > 0) {
          addToWishlistInit();
          if($(".load-more-button").attr("data-href") == '') {
              $(".load-more-button").hide();
          }
        }
      });
  })

  /** add product from single product */
  $(".add-to-wishlist-single").click(function() {
    $(".empty-wishlist").hide();
    //$(".wishlist-form-block").show();      
    $(".wishlist-save").css('display', 'block');
    
    let _product_image = $(".wishlist-thumbnail").attr("src");
    let _product_name = $(".product-short-name").text();
    let _product_url = window.location.href;
    
    addItemToWishlist(_product_image, _product_name, _product_url);
  })

  /** wishlist form submission */
  $("#Name-2").on('keyup', function() {
      if($(this).val() !== "") {
          _name_flag = true; 
      } else {
           _name_flag = false; 
      }
        if(_name_flag && _email_flag) {
          $(".wishlist-submit-button").attr("type", "button");
            $(".wishlist-submit-button").addClass("ready-to-submit");
      } else {
          $(".wishlist-submit-button").attr("type", "submit");
            $(".wishlist-submit-button").removeClass("ready-to-submit");
      }
  })

  $("#Email-2").on('keyup', function() {
      if($(this).val() !== "" && _email_regex.test($(this).val())) {
          _email_flag = true;
      } else {
           _email_flag = false; 
      }
        if(_name_flag && _email_flag) {
          $(".wishlist-submit-button").attr("type", "button");
            $(".wishlist-submit-button").addClass("ready-to-submit");
      } else {
          $(".wishlist-submit-button").attr("type", "submit");
            $(".wishlist-submit-button").removeClass("ready-to-submit");
      }
  })
  
  /** show name & email form */
  $(".wishlist-save").click(function() {
        if(sessionStorage.getItem('wishlist_saved')) {
            if(sessionStorage.getItem('new_product_added')) {
                $(this).text("Save");
                toastr.success('Touch list updated!', 'Success!', {timeOut: 2000});
                sessionStorage.removeItem('new_product_added');
            }
        } else {
            $(this).text("Save");
            toastr.success('Touch list saved!', 'Success!', {timeOut: 2000});
            sessionStorage.setItem('wishlist_saved', true);
            sessionStorage.removeItem('new_product_added');
        }

        $(this).hide();
        $(".wishlist-product-list").hide();
        $(".wishlist-form-block").show();
        $(".wishlist-title").text("Your Details");
        
  });

  /** back to wishlist */
  $(".form-back").click(function() {
        $(".wishlist-form-block").hide();
        $(".wishlist-save").show();
        $(".wishlist-product-list").show();
        $(".wishlist-title").text("My Touch List");
  })

  /** on click form submit*/
  $(".wishlist-submit-button").click(function() {
    if(_name_flag && _email_flag) {
      $(".wishlist-loader").css("display", "flex").hide().fadeIn();
      
        let _items = sessionStorage.getItem('wishlist') !== null ? JSON.parse(sessionStorage.getItem('wishlist')) : [];
        let _product_string = "";
        let _email_data = [];

        if(_items.length) {
            for(let i=0;i<_items.length;i++) {
                _product_string += "### #"+(i+1)+".\n- `Name:` "+_items[i].product + "\n* `URL:` ["+_items[i].url+"]("+_items[i].url+")\n* `Image Link:` [Click here to view]("+_items[i].image+")\n\n";
            
                  /** data to be sent in mail */
                _email_data.push({"product": _items[i].product, "product_image": _items[i].image, "product_url": _items[i].url})
            }
        }
        let _data_to_send = {
          "records": [
            {
              "fields": {
                "Name": $("#Name-2").val(),
                "Email": $("#Email-2").val(),
                "Wishlisted Products": _product_string,
                "Date Created": new Date()
              }
            }
          ]
        }
        $.ajax({
            url: 'https://api.airtable.com/v0/appl81v9FrZ585lpM/Product%20Wishlist/',
            type: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer keyLNSVTRzmnMeZI0"
            },
            data: JSON.stringify(_data_to_send),
            success: function (res) {
                //console.log(res); 
                $(".wishlist-title").text("My Touch List");
                toastr.success('Touch list saved', 'Success!', {timeOut: 2000});
                sessionStorage.removeItem('wishlist');
                sessionStorage.removeItem('wishlist_saved');
                sessionStorage.removeItem('new_product_added');
                $(".my-wishlist").empty();
                _wishlist_arr = [];
                $(".wishlist-submit-button").attr("type", "submit");
                $("#email-form").submit();
                $(".wishlist-loader").fadeOut();
                $(".wishlist-item-count").removeClass("active");
                setTimeout(() => {
                    $(".empty-wishlist").show();
                    $(".wishlist-save").hide();
                    $(".wishlist-save").text("Save");
                    if(window.innerWidth > 767) {
                        $(".top-header-menu-link.open-my-wishlist").text("My Touch List");
                        $(".wishlist-item-count").text("0").hide();
                    } else {
                        $(".top-header-menu-link.open-my-wishlist").html("<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/61028688400af896c613eb68_heart.png' alt='' />");
                        $(".wishlist-item-count").text("0").hide();
                    }
                    $(".wishlist-product-list").show();
                    $(".wishlist-form-block").hide();
                    $(".wishlist-form-block .w-form-done").hide();
                    $("#email-form").fadeIn();
                    $(".wishlist-container").removeClass("active");
                    $(".wishlist-submit-button").removeClass("ready-to-submit");
                    $("#email-form").trigger("reset");
                }, 6000)
            },
            error: function (err) {
                console.log(err);
                toastr.error('Something went wrong', 'Oops!', {timeOut: 2000});
                $(".wishlist-loader").fadeOut();
            },
        });
        /** mail alert */
        let _mail_data = {
            "name": $("#Name-2").val(),
          "email": $("#Email-2").val(),
          "wishlisted_products": _email_data
        }
        $.ajax({
            url: 'https://www.bgranalytics.com/projects/mrfloor/airTable-send-mail.php',
            type: 'POST',
            data: JSON.stringify(_mail_data),
            success: function (res) {
                //console.log(JSON.parse(res));         
                _email_data = []
            },
            error: function (err) {
                console.log(err);
            },
        });
    } 
    })
})

function addItemToWishlist(_product_image, _product_name, _product_url) {
    $(".wishlist-title").text("Your Touch List");
    $(".wishlist-form-block").hide();
    $(".wishlist-product-list").show();
    
    /** check if product is already exist in sessionStorage */
  if(_wishlist_arr.find(o => o.product === _product_name) !== undefined) {
    toastr.info('Product is already in your touch list', 'Hello Again!', {timeOut: 2000});
  } else {
    let _product_obj = {"product": _product_name, "image": _product_image, "url": _product_url};
    _wishlist_arr.push(_product_obj);
    /** save product to session storage */
    sessionStorage.setItem('wishlist', JSON.stringify(_wishlist_arr));
    sessionStorage.setItem('new_product_added', true);
    $(".wishlist-item-count").removeClass("active");

    /** append to frontend */
    let append_to_html = '<li class="wishlist-item">'+
        '<div class="wishlist-number">'+ ($(".my-wishlist li").length + 1) +'</div>'+
        '<a href="'+ _product_url +'" class="wishlisted-product-thumb w-inline-block"><img src="'+ _product_image +'" alt="'+ _product_name +'" /></a>'+
        '<a href="'+ _product_url +'" class="wishlisted-product w-inline-block">'+
        '<div class="wishlisted-product-title">'+ _product_name +'</div>'+
        '</a>'+
        '<div title="Remove" class="remove-wishlist-item" onclick="removeItemFromWishlist(this)">'+
        '<img src="https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610a395a792530831eaafa07_cl.png" loading="lazy" alt=""/>'+
        '</div></li>';
    $(".my-wishlist").append(append_to_html);

    /** */
    $(".wishlist-title").text("My Touch List");
    $(".wishlist-form-block").hide();
    $(".wishlist-product-list").show();
    toastr.success('Product is added to touch list', 'Success!', {timeOut: 2000});
    setTimeout(() => {
      changeWishlishNumberBG();
    }, 60000);

    /** detect if save button clicked */
    if(sessionStorage.getItem('wishlist_saved')) {
        $(".wishlist-save").text("Update");
    }

    let _new_wishlist = JSON.parse(sessionStorage.getItem('wishlist'));
    if(window.innerWidth > 767) {
        $(".top-header-menu-link.open-my-wishlist").text("My Touch List ("+ _new_wishlist.length +")");
        $(".wishlist-item-count").text(_new_wishlist.length).show();
    } else {
        $(".top-header-menu-link.open-my-wishlist").html("<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/61028688400af896c613eb68_heart.png' alt='' /><span>("+ _new_wishlist.length +")</span>");
        $(".wishlist-item-count").text(_new_wishlist.length).show();
    }
  }
}

function removeItemFromWishlist(el) {
  let _porduct_to_remove = $(el).parents(".wishlist-item").find(".wishlisted-product-title").text();
  let _index_to_delete = parseInt($(el).parents(".wishlist-item").find(".wishlist-number").text()) - 1;
  let _existing_wishlist = JSON.parse(sessionStorage.getItem('wishlist'));

  if(_wishlist_arr.find(o => o.product === _porduct_to_remove) !== undefined) {
    _existing_wishlist.splice(_index_to_delete, 1);
    _wishlist_arr.splice(_index_to_delete, 1);
    sessionStorage.setItem('wishlist', JSON.stringify(_existing_wishlist));

    if(window.innerWidth > 767) {
        $(".top-header-menu-link.open-my-wishlist").text("My Touch List ("+ _existing_wishlist.length +")");
        $(".wishlist-item-count").text(_existing_wishlist.length).show();
    } else {
        $(".top-header-menu-link.open-my-wishlist").html("<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/61028688400af896c613eb68_heart.png' alt='' /><span>("+ _existing_wishlist.length +")</span>");
        $(".wishlist-item-count").text(_existing_wishlist.length).show();
    }
    /** update frontend data */
    if(_existing_wishlist.length) {
        let append_to_html = '';
      for(let i=0; i<_existing_wishlist.length; i++) {
          append_to_html += '<li class="wishlist-item">'+
            '<div class="wishlist-number">'+ (i+1) +'</div>'+
            '<a href="'+ _existing_wishlist[i].url +'" class="wishlisted-product-thumb w-inline-block"><img src="'+ _existing_wishlist[i].image +'" alt="'+ _existing_wishlist[i].product +'" /></a>'+
            '<a href="'+ _existing_wishlist[i].url +'" class="wishlisted-product w-inline-block">'+
              '<div class="wishlisted-product-title">'+ _existing_wishlist[i].product +'</div>'+
          '</a>'+
          '<div title="Remove" class="remove-wishlist-item" onclick="removeItemFromWishlist(this)">'+
              '<img src="https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/610a395a792530831eaafa07_cl.png" loading="lazy" alt=""/>'+
          '</div></li>';
      }
        $(".my-wishlist").empty().append(append_to_html);
    }
    toastr.success('Product removed from touch list', 'Success!', {timeOut: 2000});
    sessionStorage.setItem('wishlist_saved', true);
    sessionStorage.setItem('new_product_added', true);
    $(".wishlist-save").text("Update");
  } else {
    toastr.error('Something went wrong', 'Oops!', {timeOut: 2000});
  }
  if(_existing_wishlist.length === 0) {
    sessionStorage.removeItem('wishlist');
    sessionStorage.removeItem('wishlist_saved');
    sessionStorage.removeItem('new_product_added');
    $(".wishlist-save").hide();
    $(".wishlist-save").text("Save");
    $(".my-wishlist").empty();
    $(".empty-wishlist").show();
    $(".wishlist-form-block").hide();
    $(".wishlist-item-count").removeClass("active");
    if(window.innerWidth > 767) {
        $(".top-header-menu-link.open-my-wishlist").text("My Touch List");
        $(".wishlist-item-count").text("0").hide();
    } else {
        $(".top-header-menu-link.open-my-wishlist").html("<img src='https://uploads-ssl.webflow.com/60fe23d9684b463c30c4d711/61028688400af896c613eb68_heart.png' alt='' />");
        $(".wishlist-item-count").text("0").hide();
    }
  }
}

// function changeToNextText() {
//     let _text = $(".slick-slide.slick-current.slick-active").next().next().find(".speciality-bottom-title").text();
//     $(".speciality-slider .get-direction.slick-arrow").find(".pos-relative").text(_text);
// }

function changeToNextPrevText() {
    let _next_text = $(".slick-slide.slick-current.slick-active").next().next().find(".speciality-bottom-title").text();
    let _prev_text = $(".slick-slide.slick-current.slick-active").find(".speciality-bottom-title").text();
    $(".speciality-slider .get-direction.next.slick-arrow").find(".pos-relative").text(_next_text);
    $(".speciality-slider .get-direction.prev.slick-arrow").find(".pos-relative").text(_prev_text);
}

function changeWishlishNumberBG () {
  if(sessionStorage.getItem('wishlist') !== null) {
    $(".wishlist-item-count").addClass("active");
  }
}
