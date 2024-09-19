body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #000;
    color: #fff;
    text-align: center;
}

.title-container {
    margin-bottom: 100px;
}

.title-main {
    font-size: 48px;
    font-weight: bold;
}

.title-sub {
    font-size: 24px;
    font-weight: lighter;
}

.scene {
    width: 200px;
    height: 200px;
    perspective: 1000px;
}

.cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-30deg) rotateY(45deg);
    transition: transform 1s;
}

.face {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.front  { transform: translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }

.controls {
    margin-top: 100px;
}

button {
    font-size: 20px;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    color: #000;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #ddd;
}
