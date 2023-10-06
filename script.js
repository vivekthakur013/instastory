var arr = [
    {
        dp: "https://images.unsplash.com/photo-1690286727405-ecdf6ab04bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzMXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        img: "https://images.unsplash.com/photo-1692727865735-9165d5a0736b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1692468206229-9cd3c30144b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        img: "https://images.unsplash.com/photo-1692467478663-067848d6e177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1692467478663-067848d6e177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        img: "https://images.unsplash.com/photo-1692171295305-e84a1d62a842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1663167529629-de24f18738cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        img: "https://images.unsplash.com/photo-1692283394836-37822c89576e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1692210495336-8667aa20f006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        img: "https://images.unsplash.com/photo-1691997369437-ae4c6de82fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1692178574211-5ebf8c120f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        img: "https://images.unsplash.com/photo-1692034541971-456aaf5ec79d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1692035053386-76667a66067a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        img: "https://images.unsplash.com/photo-1694631031738-0e857f3e872a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1681155361958-d51298bcb13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        img: "https://plus.unsplash.com/premium_photo-1677260349790-b3372d0acc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1692641346524-154a0971ca2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        img: "https://plus.unsplash.com/premium_photo-1695219820032-34cfa7950b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        dp: "https://images.unsplash.com/photo-1695032631902-2a00afff6f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        img: "https://images.unsplash.com/photo-1695321423578-ecac36e065b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
];

var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += ` <div class="story">
  <img ${idx}
    src="${elem.dp}"
    alt=""
  />
</div>`;
    // console.log(clutter)
});

document.querySelector("#storiya").innerHTML = clutter;

document.querySelector("#storiya").addEventListener("click", function (dets) {
    document.querySelector("#full-scr").style.display = "block"
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].img})`

    setTimeout(function () {
        document.querySelector("#full-scr").style.display = "none"
    }, 3000)
})