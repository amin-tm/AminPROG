export const TestProject = () => {
    return (
        <div>
            <div>
                <p>Time: <span>0s</span></p>
                <p>Mistakes: <span>0</span></p>
            </div>
            <div id="quote" onmousedown="return false" onselectstart="return false"></div>
            <textarea id="quote-input" rows="3" placeholder="Type here when qoute ready and test start..."></textarea>

            <button id="start-test" onclick="startTest()">Start Test</button>
            <button id="stop-test" onclick="displayResult()">Stop Test</button>
            <button id="refresh-quote" onclick="refreshQuote()">Refresh Quote</button>

            <div>
                <h3>Result</h3>
                <div>
                    <p>Accuracy: <span id="accuracy"></span></p>
                    <p>Speed: <span id="wpm"></span></p>
                </div>
            </div>
        </div>
    )
}