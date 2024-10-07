const messages = [
    "お世話になりました！",
    "いつもサポートをしていただき、ありがとうございました！",
    "迷惑ばかりかけましたが、アルバイトを承りカウンターでできてよかったです！",
    "様々な経験ができました！",
    "それぞれの場所でがんばりましょう！"
];

let currentMessageIndex = 0;
const messageElement = document.getElementById('message');
const nextButton = document.getElementById('nextBtn');

nextButton.addEventListener('click', () => {
    currentMessageIndex++;
    if(currentMessageIndex >= messages.length){
        currentMessageIndex = 0;
    }
    messageElement.textContent = messages[currentMessageIndex];
});