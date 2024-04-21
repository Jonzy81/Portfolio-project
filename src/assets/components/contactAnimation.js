export const initContactAnimation = () => {
    const animateSubliminalSpans = () => {
        spans[currentSpan].className = "";
        currentSpan++;
        currentSpan %= spans.length;
        spans[currentSpan].className = "fade";
    };
    let spans;
    let currentSpan = 0;

    const init = () => {
        spans = document.querySelectorAll('.background-animation span');
        setInterval(animateSubliminalSpans, 1000);
    };
    init();
    console.log('Contact animation initialized');
};

