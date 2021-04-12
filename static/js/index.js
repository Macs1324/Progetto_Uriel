// The debounce function receives our function as a parameter
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) { 
          cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          
          // Call our function and pass any params we received
          fn(...params);
        });

    } 
  };


  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    
    //Shades the header if it's sticking to the top
    if(window.scrollY > 2)
    {
        document.getElementsByClassName("header")[0].style.boxShadow = "0px 1em 0.5em 0.1em rgba(0, 0, 0, 0.6)";
    }
    else
    {
        document.getElementsByClassName("header")[0].style.boxShadow = "none";
    }
  }

  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });

  // Update scroll position for first time
  storeScroll();