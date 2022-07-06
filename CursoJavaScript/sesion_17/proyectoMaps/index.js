let markers, map;

function initMap() {
    const posicion = {
        lat: -25.344,
        lng: 131.031 ,
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 36.503135,
                lng: -4.706875,
            },
            map,
            title: "Mijas Costa",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: 28.919321,
                lng: -13.653250,
            },
            map,
            title: "Puerto del Carmen (Lanzarote)",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: -36.893831,
                lng: -185.274568,
            },
            map,
            title: "Auckland (New Zealand)",
        })
    );
}
