import React, {useState} from 'react';
import './App.css';
import MindARViewer from './mindar-viewer';
// import MindARThreeViewer from './mindar-three-viewer';
import {IoMdImages} from "react-icons/io";
import {MdFaceRetouchingNatural} from "react-icons/md";
import {HiFingerPrint} from "react-icons/hi"

function App() {
    // const [started, setStarted] = useState(null);
    // menu, image, interactive,face
    const [mode, setMode] = useState('menu');
    return (
        <div className="overflow-hidden h-full ">
            {/*  <h1 className={'text-red-500 text-2xl'}>Example React component with <a href="https://github.com/hiukim/mind-ar-js" rel="noreferrer" target="_blank">MindAR</a></h1>*/}

            {/*  <div className="control-buttons">*/}
            {/*    {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}*/}
            {/*    {started === null && <button onClick={() => {setStarted('three')}}>Start ThreeJS version</button>}*/}
            {/*    {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}*/}
            {/*  </div>*/}

            {/*  {started === 'aframe' && (*/}
            {/*    <div className="container">*/}
            {/*      <MindARViewer/>*/}
            {/*      <video></video>*/}
            {/*    </div>*/}
            {/*  )}*/}

            {/*  {started === 'three' && (*/}
            {/*    <div className="container">*/}
            {/*      <MindARThreeViewer />*/}
            {/*    </div>*/}
            {/*  )}*/}

            {
                mode === 'menu' && (
                    <div className={'w-full min-h-screen bg-white flex flex-col justify-start items-center py-3'}>
                        <div className={'fixed text-[300px] xl:text-[500px] font-bold text-purple-400 opacity-10 -top-64 -left-32'}>
                            AR
                        </div>

                        <h1 className={'font-bold text-2xl lg:text-3xl font-sans'}>
                            Augmented Reality Demo
                        </h1>

                        <div className={'my-2 font-mono text-gray-400'}>
                            Made with <b className={'text-blue-400'}>MindAR</b> by Chengzihan.
                        </div>

                        <a
                            href={'/pages/basic.html'}
                            target={'_blank'}
                            className={'w-full flex flex-col my-1 mt-8 px-8 lg:px-48 2xl:px-96 cursor-pointer'}
                            // onClick={()=>{
                            //   setMode('image')
                            // }}
                        >
                            <div className={'w-full h-32 overflow-hidden bg-green-100 rounded-md relative border-2 border-green-500 flex items-center px-3 py-2'}>
                                <h1 className={'font-bold text-5xl text-green-500 opacity-70 font-sans text-center'}>
                                    图像追踪
                                </h1>
                                <IoMdImages className={'text-green-500 absolute right-0 bottom-0 opacity-30 text-[200px] ml-5'}/>
                            </div>
                        </a>

                        <div
                            className={'w-full flex flex-col my-1 px-8 lg:px-48 2xl:px-96 cursor-pointer'}
                            onClick={()=>{
                                setMode('face')
                            }}
                        >
                            <div className={'w-full h-32 overflow-hidden bg-red-100 rounded-md relative border-2 border-pink-500 flex items-center px-3 py-2'}>
                                <h1 className={'font-bold text-5xl text-red-500 opacity-70 font-sans text-center'}>
                                    人脸追踪
                                </h1>
                                <MdFaceRetouchingNatural className={'text-red-500 absolute right-0 bottom-0 opacity-30 text-[200px] ml-5'}/>
                            </div>
                        </div>

                        <div
                            className={'w-full flex flex-col my-1 px-8 lg:px-48 2xl:px-96 cursor-pointer'}
                            onClick={()=>{
                                setMode('interactive')
                            }}
                        >
                            <div className={'w-full h-32 overflow-hidden bg-blue-100 rounded-md relative border-2 border-blue-500 flex items-center px-3 py-2'}>
                                <h1 className={'font-bold text-5xl text-blue-500 opacity-70 font-sans text-center'}>
                                    交互
                                </h1>
                                <HiFingerPrint className={'text-blue-500 absolute right-0 bottom-0 opacity-30 text-[200px] ml-5'}/>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                mode === 'image' && (
                    <div className={'h-full'}>
                        <MindARViewer/>
                    </div>
                )
            }
        </div>
    );
}

export default App;
