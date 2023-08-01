  class Animation {
      static up(obj, delayDuration){
          const motion  = [
              {transform: 'translateY(100px)', opacity: 0},
              {transform: 'translateY(0)', opacity:1}
          ];
          const options = {duration : 800, fill: 'both', easing: 'ease-in-out', delay: delayDuration};
          obj.animate(motion,options);
      };
      static up2(obj, delayDuration){
          const motion  = [
              {transform: 'translateY(140px)', opacity: 0},
              {opacity: 0, offset:0.5},
              {transform: 'translateY(0)', opacity:1}
          ];
          const options = {duration : 800, fill: 'both', easing: 'ease-in-out', delay: delayDuration};
          obj.animate(motion,options);
      };
      static up3(obj, delayDuration){
          const motion  = [
              {transform: 'translateY(300px)',opacity:0},
              {opacity: 1, offset:0.2},
              {transform: 'translateY(0)',opacity:1}
          ];
          const options = {duration : 750, fill: 'both', easing: 'ease-out', delay: delayDuration};
          obj.animate(motion,options);
      };
      static down(obj, delayDuration){
          const motion  = [
              {transform: 'translateY(-100px)', opacity: 0},
              {transform: 'translateY(0px)', offset:0.65},
              {transform: 'translateY(-2px)', offset:0.8},
              {transform: 'translateY(0px)', opacity:1}
          ];
          const options = {duration : 600, fill: 'both', easing: 'ease-out', delay: delayDuration};
          obj.animate(motion,options);
      };
      static left(obj, delayDuration){
          const motion  = [
              {transform: 'translateX(140px)',opacity: 0},
              {transform: 'translateX(0px)',opacity: 1}
          ];
          const options = {duration : 600, fill: 'both', easing: 'ease-out', delay: delayDuration};
          obj.animate(motion,options);
      };
      static right(obj, delayDuration){
          const motion  = [
              {transform: 'translateX(-140px)',opacity: 0},
              {transform: 'translateX(0px)',opacity: 1}
          ];
          const options = {duration : 600, fill: 'both', easing: 'ease-out', delay: delayDuration};
          obj.animate(motion,options);
      };
      static fadeIn(obj,delayDuration,aniDuration){
          const motion  = [
              {opacity: 0},
              {opacity: 1}
          ];
          const options = {duration : aniDuration, fill: 'both', easing: 'ease-in', delay: delayDuration};
          obj.animate(motion,options);
      };
      static scale(obj, delayDuration){
          const motion  = [
              {transform: 'scale(0.8)', opacity: 0},
              {transform: 'scale(1)',  opacity: 1}
          ];
          const options = {duration : 500, fill: 'both', easing: 'ease-in-out', delay: delayDuration};
          obj.animate(motion,options);
      };
      static upAndDown(obj, delayDuration, interations){
          const motion  = [
              {transform: 'translateY(0px)', opacity:1},
              {transform: 'translateY(-10px)', opacity:1, offset:0.5},
              {transform: 'translateY(0px)', opacity:1}
          ];
          const options = {duration : 2000, fill: 'both', easing: 'ease-in-out', iterations: interations, delay:delayDuration};
          obj.animate(motion,options);
      };
      static rotate(obj, iteration){
          const motion  = [
              {rotate : '0deg', opacity:1},
              {rotate : '360deg', opacity:1}
          ];
          const options = {duration : 14000, fill: 'both', easing: 'linear', iterations: iteration};
          obj.animate(motion,options);
      };
      static rotateRB(obj, iteration){
          const motion  = [
              {transform : 'rotate(-5deg)', transformOrigin : 'right bottom', opacity:1},
              {transform : 'rotate(5deg)', tranformOrigin : 'right bottom', opacity:1, offset:.5},
              {transform : 'rotate(-5deg)', transformOrigin : 'right bottom', opacity:1}
          ];
          const options = {duration : 1000, fill: 'both', easing: 'ease-in-out', iterations: iteration};
          obj.animate(motion,options);
      };
      static rotateCB(obj, iteration){
          const motion  = [
              {transform : 'rotate(-5deg)', transformOrigin : 'center bottom', opacity:1},
              {transform : 'rotate(5deg)', tranformOrigin : 'center bottom', opacity:1, offset:.5},
              {transform : 'rotate(-5deg)', transformOrigin : 'center bottom', opacity:1}
          ];
          const options = {duration : 1400, fill: 'both', easing: 'ease-in-out', iterations: iteration};
          obj.animate(motion,options);
      };
  }
