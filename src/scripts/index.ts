window.onload = async function () {
    const player1 = document.getElementById('player1') as HTMLVideoElement;
    const player2 = document.getElementById('player2') as HTMLVideoElement;

    try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({video: true}) as MediaStream;
        console.log("success!");
        player1.srcObject = mediaStream;
        player2.srcObject = mediaStream;
    } catch (error) {
        console.log(error);
    }
};