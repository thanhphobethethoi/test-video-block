function run()
            {
                var htmlObj = document.getElementById('show');
                htmlObj.innerHTML = htmlObj.innerHTML + `
    <video id="my-video" class="video-js vjs-default-skin" controls preload="auto" controlsList="nodownload" width="940" height="660" data-setup="{}">
        <source src="https://archive.org/download/quang-cao-topik-1/quang-cao-topik%20%281%29.mp4" type="video/mp4">
    </video>
`;
            }

