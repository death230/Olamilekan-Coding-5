const downloadBtn = document.querySelector(".download-btn");
    const countdown = document.querySelector(".countdown");
    const pleaseWaitText = document.querySelector(".pleaseWait-text");
    const manualDownloadText = document.querySelector(".manualDownload-text");
    const manualDownloadLink = document.querySelector(".manualDownload-link");
    var timeLeft = 10;

    downloadBtn.addEventListener("click", () => {
      downloadBtn.style.display = "none";
      countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds."; //for quick start of countdown

      var downloadTimer = setInterval(function timeCount(){
        timeLeft -= 1;
        countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";

        if(timeLeft <= 0){
          clearInterval(downloadTimer);
          pleaseWaitText.style.display = "block";
          let download_href = "https://drive.google.com/file/d/17Yi6ttJq55fj558EIOe82CEohPapsfgp/view?usp=drivesdk"; //enter the downloadable file link URL here
          window.location.href = download_href;
          manualDownloadLink.href = download_href;

          setTimeout(() => {
            pleaseWaitText.style.display = "none";
            manualDownloadText.style.display = "block";
          }, 4000);
        }
      }, 1000);
    });