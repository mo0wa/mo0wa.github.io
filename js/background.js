let RAIN = {

    o: {
      chars: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'J', 'Q', 'W', 'X', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ],
      container: []
    },
  
    start: function(container) {
        this.o.container.push(container);
        this.createNode();
      },
    
      createNode: function() {
        let randomChar = this.o.chars[this.chooseRandom(this.o.chars.length)];
        let letter = document.createElement('span');
        letter.innerHTML = randomChar;
    
        // 초기 위치 설정
        let startLeft = this.chooseRandom(100); // 시작 위치 랜덤 좌표
        let startTop = -10; // 화면 위에서 시작하도록 설정
        letter.style.left = startLeft + "%";
        letter.style.top = startTop + "%";
        letter.style.fontSize = this.chooseRandom(100, 120, 80) + "px";
    
        this.insertNode(letter, startLeft);
      },
    
      chooseRandom: function(range, minimum) {
        let rand;
        minimum ? rand = (Math.floor(Math.random() * range) + minimum) : rand = Math.floor(Math.random() * range);
        return rand;
      },
    
      insertNode: function(element, startLeft) {
        let container = document.querySelector(this.o.container);
        container.appendChild(element);
    
        setTimeout(() => {
          let endLeft = startLeft + this.chooseRandom(20, -10); // 대각선 방향으로 이동하도록 설정
          element.style.transform = `translate(${endLeft - startLeft}vw, 110vh)`;  // 대각선으로 이동시키기 위해 left를 증가시키고, top을 110vh로 설정
          element.classList.add('translateY');
        }, 10);
    
        setTimeout(() => {
          element.parentNode.removeChild(element);  
        }, 3000);
      }
    }
    
    let container = '[data-container]';
    
    // 빈도 설정
    setInterval(() => {
      RAIN.start(container);
    }, 400);