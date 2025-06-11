var video_uuid = "CcwlAnWIhjA";
    if (video_count == undefined) {var video_count = 0} else {video_count++}
    var prebidOfTagUrl = null;
    var prebidOfPosition = null;
    var custParams = null;
    var dj_fetchAdsProxy = window.dj_playerAdsProxy || null;
    var djCampaignId = "0";
    if (dj_adtags == undefined) {
        var dj_adtags = {}
        var invokePlayer;
    }
    invokePlayer = (prerollVastUrl, midrollVastUrl, postrollVastUrl, position, params) => {
        dj_adtags['CcwlAnWIhjA'] = {
            'preroll': prerollVastUrl,
            'midroll': midrollVastUrl,
            'postroll': postrollVastUrl,
            'position': position,
            'params': params
        };
        prebidOfPosition = position;
        params ? custParams = params : custParams = null;
    }
    var vidWrap = document.createElement("div");
            vidWrap.setAttribute("data-pubid","23");
        vidWrap.setAttribute("data-coid","12");
        vidWrap.setAttribute("data-poster","https://i.cdn.dejacast.com/primanews/2025/05/24/CcwlAnWIhjA_1748038281.jpg");
        vidWrap.setAttribute("data-controls","1");
        vidWrap.setAttribute("data-preload","auto");
        vidWrap.setAttribute("data-vid","392489");
    vidWrap.setAttribute("data-uuid",video_uuid);
    vidWrap.setAttribute("data-env","https://app.dejacast.com");
            
        vidWrap.setAttribute("data-playurl","https://serifos.cdn.dejacast.com/vod/primanews/2025/05/24/3719d62b8c1579f218e56113b365f0f0677473d1feb6eea4698df0d36a053306,_720p,_360p,.mp4.urlset/master.m3u8?from=1749663087&to=1749670287&session=ylqEgkvFOvCD7U1J&source=embed&token=TAwrnzPgJir1DXTiaRYv5QyB384=");
                vidWrap.setAttribute("data-jsasset","https://app.dejacast.com/js/v/0.2.8/djvideo_sr.js");
                vidWrap.setAttribute("data-lightplayer","false");
        vidWrap.setAttribute("data-blankurl","");
    vidWrap.setAttribute("data-loop","0");
    vidWrap.setAttribute("data-autoplay","OFF");
    vidWrap.setAttribute("data-title","Catalin Drula - candideaza sau nu la Primaria Capitalei?");
    vidWrap.setAttribute("data-playlistMode","0");
            
        vidWrap.setAttribute("data-h","27f8193c220cd5f694c80a6f5b8a120b987f51b40981f3cba46435454acf0c9e");
        vidWrap.setAttribute("data-muted","0");
    vidWrap.setAttribute("data-mutemode","1");
    vidWrap.setAttribute("data-hasads","1");
    vidWrap.setAttribute("data-pslug","wY90JOLn");
    vidWrap.setAttribute("data-isfloating","1");
    vidWrap.setAttribute("data-passbackalwayson","0");
    vidWrap.setAttribute("data-placement","instream");
    vidWrap.setAttribute("data-omnifocus","0"); 
    vidWrap.setAttribute("data-ofconfig","{}");
    vidWrap.setAttribute("data-olconfig","[]");
    vidWrap.setAttribute("data-floatpos","bottom-right");
    vidWrap.setAttribute("data-customtheme","");
    vidWrap.setAttribute("data-stylesprotection","1");
    vidWrap.setAttribute("data-trks","[]");
    vidWrap.setAttribute("data-opfslg",null);
    vidWrap.setAttribute("data-oprid",null);
    vidWrap.setAttribute("data-ocsid",null);
    vidWrap.setAttribute("data-oappv",null);
    vidWrap.setAttribute("data-oappd",null);
    vidWrap.setAttribute("class","dj-mainref");
    vidWrap.setAttribute("id","dj"+video_uuid);

    vidWrap.setAttribute("data-pubslug","primanews");
    vidWrap.setAttribute("data-vlen", 332000);
    
    
    document.currentScript.insertAdjacentElement('afterend', vidWrap);

    vw = document.getElementById("dj"+video_uuid);

    var embedScript = document.createElement("script");
    embedScript.setAttribute("type","text/javascript")
    embedScript.setAttribute("src", "https://app.dejacast.com/js/embed.js?u="+video_uuid+"&v=20250227");
    var placer = document.getElementById("dj"+video_uuid);
    vw.insertAdjacentElement('afterend', embedScript);

    if (refs == undefined) {var refs = []}
    refs.push(vidWrap);
    
