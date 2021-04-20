import { faAngleDown, faAngleUp, faPause, faPlay, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function Clock(){
    let [state, setState] = useState({
        breakLength:5,
        sessLength:25,
        timer:false,
        displaySession:1500,
        displayBreak:300,
        isSession:true
    });
    function breakDown(){
        if (state.breakLength > 1){
            setState({
                breakLength:state.breakLength - 1,
                sessLength:state.sessLength,
                timer:false,
                displaySession:state.displaySession,
                displayBreak:(state.breakLength - 1)*60,
                isSession: state.isSession
            });
        } 
    }
    function breakUp(){
        if(state.breakLength < 60){
            setState({
                breakLength:state.breakLength + 1,
                sessLength:state.sessLength,
                timer:false,
                displaySession:state.displaySession,
                displayBreak:(state.breakLength + 1)*60,
                isSession: state.isSession
            });
        }
    }
    function sessDown(){
        if (state.sessLength > 1){
            setState({
                sessLength:state.sessLength - 1,
                breakLength:state.breakLength,
                timer:false,
                displaySession:(state.sessLength-1)*60,
                displayBreak:state.displayBreak,
                isSession: state.isSession
            });
        } 
    }
    function sessUp(){
        if(state.sessLength < 60){
            setState({
                sessLength:state.sessLength + 1,
                breakLength:state.breakLength,
                timer:false,
                displaySession:(state.sessLength+1)*60,
                displayBreak:state.displayBreak,
                isSession: state.isSession
            });
        }
    }
    function reset(){
        const audio = document.getElementById("beep");
        audio.pause();
        audio.currentTime=0;
        setState({
            breakLength:5,
            sessLength: 25,
            timer:false,
            displaySession:1500,
            displayBreak:300,
            isSession:true
        });
    }
    function playPause(){
        setState({
            breakLength: state.breakLength,
            sessLength: state.sessLength,
            timer: !state.timer,
            displaySession:state.displaySession,
            displayBreak:state.displayBreak,
            isSession: state.isSession
        });
    }
    function convertMS(arg){
        const sec = parseInt(arg,10);
        let minutes = Math.floor(sec / 60);
        let seconds = sec - (minutes * 60);
        if(minutes<10){minutes = "0"+minutes;}
        if(seconds<10){seconds = "0"+seconds;}
        return minutes+":"+seconds;
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(document.getElementById("time-left").innerText === "00:01"){
                document.getElementById("beep").play();
            }
            if(state.timer && state.isSession){
                setState({
                    breakLength: state.breakLength,
                    sessLength: state.sessLength,
                    timer: state.timer,
                    displaySession:state.displaySession - 1,
                    displayBreak: state.breakLength*60,
                    isSession:state.isSession
                });
                if(state.displaySession === 0){
                    setState({
                        breakLength: state.breakLength,
                        sessLength: state.sessLength,
                        timer: state.timer,
                        displaySession: state.displaySession,
                        displayBreak: state.displayBreak,
                        isSession: !state.isSession
                    });
                }
            }else if(state.timer && !state.isSession){
                setState({
                    breakLength: state.breakLength,
                    sessLength: state.sessLength,
                    timer: state.timer,
                    displaySession: state.sessLength*60,
                    displayBreak: state.displayBreak - 1,
                    isSession: state.isSession
                });
                if(state.displayBreak === 0){
                    setState({
                        breakLength: state.breakLength,
                        sessLength: state.sessLength,
                        timer: state.timer,
                        displaySession: state.displaySession,
                        displayBreak: state.displayBreak,
                        isSession: !state.isSession
                    });
                }
            }
        },1000);
        return () => clearTimeout(timer);
    });
    
    return(
        <main>
            <div>
                <p id="break-label">Break Length</p>
                <div>
                <div id="break-decrement" onClick={state.timer?()=>{}:breakDown}><FontAwesomeIcon icon={faAngleDown}/></div>
                <p id="break-length">{state.breakLength}</p>
                <div id="break-increment" onClick={state.timer?()=>{}:breakUp}><FontAwesomeIcon icon={faAngleUp}/></div>
                </div>
            </div>
            <div>
                <p id="session-label">Session Length</p>
                <div>
                <div onClick={state.timer?()=>{}:sessDown} id="session-decrement"><FontAwesomeIcon icon={faAngleDown}/></div>
                <p id="session-length">{state.sessLength}</p>
                <div onClick={state.timer?()=>{}:sessUp} id="session-increment"><FontAwesomeIcon icon={faAngleUp}/></div>
                </div>
            </div>
            <section id="session-container" className="rounded">
                <header>
                    <h4 id="timer-label">{state.isSession ? "Session":"Break"}</h4>
                </header>
                <p id="time-left" className={(state.displayBreak < 60 && !state.isSession) || (state.displaySession < 60 && state.isSession) ? "last-seconds":""}>{
                        state.isSession ? 
                        convertMS(state.displaySession)
                        :convertMS(state.displayBreak)
                    }
                </p>
                <section id="play_buttons" className="buttons">
                    <div id="start_stop" onClick={playPause}>{!state.timer ?
                        <FontAwesomeIcon icon={faPlay}/>
                        :<FontAwesomeIcon icon={faPause}/>
                        }
                    </div>
                    <div id="reset" onClick={reset}><FontAwesomeIcon icon={faUndo}/></div>
                </section>
            </section>
            <audio
            id="beep"
            preload="auto"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
        </main>
    );
}

export default Clock;