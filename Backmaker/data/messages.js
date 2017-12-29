/*let name = prompt("votre nom d'utilisateur", "onetimeuser")
let peerconf = {
    debug: 3,
    config: {"iceServers":
    [
        {url: `stun:${name}@js.perspective3d.online:3478?transport=udp`, credential: name}]},
    host: "js.perspective3d.online",
    port:3478
}

let peer = new Peer(name, peerconf);

peer.on('open', function(){
    $('.status').css("background-color", "green");
})
*/
//////////////////****************ENVOI****************////////////////////
$(document).ready(function(){
    let dataConnect = $('.messagerie_ws_module #data_connect');
    let disconnect = $('.messagerie_ws_module #disconnect_btn');
    let distantIdText = $('.messagerie_ws_module #distant_id');

//////////////////****************ESTABLISH CONNECTION****************////////////////////
    dataConnect.click(function(){
        distantIdText = distantIdText.val();
        let conn = peer.connect(distantIdText);
        conn.on('open', function(){
            $('.messagerie_ws_module .peer_selector').hide();
            $('.messagerie_ws_module .messagerie_text').show();
            $('.messagerie_ws_module #send').click(function(){
                let message = $('.messagerie_ws_module #text').val();
                conn.send(message);
                var li = document.createElement('li');
                li.classList.add('you');
                li.innerHTML = `<p>you: ${message}</p>`
                $('.messagerie_ws_module #messages').append(li);
            })
        })
    })

    disconnect.click(function(){
        peer.disconnect();
        $('.messagerie_ws_module .peer_selector').show();
        $('.messagerie_ws_module .messagerie_text').hide();
    });
})

peer.on('connection', function(conn){
    let distantPeer = conn.peer;
    conn.on('data', function(data){
        var li = document.createElement('li');
                li.classList.add('theirs');
                li.innerHTML = `<p>they: ${data}</p>`
                $('.messagerie_ws_module #messages').append(li);
    })
})