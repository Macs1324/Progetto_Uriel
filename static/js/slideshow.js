//--------------------    DECLARING MAIN DOM ELEMENTS
let header = document.getElementsByClassName("header")[0]


//-----------------------------------------------------------------------SLIDESHOW
let slideshow_index = 0;
let slideshow_slides_count = 4;

function slideshow_view(index)
{
  let images = document.getElementsByClassName("slideshow")[0].getElementsByClassName("item");
	let buttons = document.getElementsByClassName("slideshow-container")[0].getElementsByClassName("buttons")[0].getElementsByClassName("dot");
	for(let i = 0; i < images.length; i++)
	{
    images[i].style.opacity = "0";
    images[i].style.pointerEvents = "none";
		buttons[i].style.backgroundColor = "#bbb";
	}
	images[index].style.opacity = "1";
  images[index].style.pointerEvents = "all";
	buttons[index].style.backgroundColor = "#666";
  slideshow_index = index;
}
  
function slideshow_next() {
    slideshow_index = (slideshow_index + 1) % slideshow_slides_count;
    slideshow_view(slideshow_index);
}

let slideshow_interval = setInterval(
  slideshow_next,
  3000
);

function reset_interval()
{
  clearInterval(slideshow_interval);
  slideshow_interval = setInterval(
    slideshow_next,
    3000
  );
}

slideshow_view(0);