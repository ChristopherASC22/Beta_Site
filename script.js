let options = {
    element: "#granim-canvas",
    direction: "diagonal",
    states: {
        "default-state": {
            gradients: [
                ["#f79d00", "#64f38c"], // first gradient
                ["#000428", "#004e92"], // second gradient
                ["rgb(241, 39, 17)", "rgb(245, 175, 25)"] // third gradient
            ],
            transitionSpeed: 2000,
            loop: true
        }
    },
    image: {
        source: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        blendingMode: "multiply",
        position: ["center", "center"],
        stretchMode: ["stretch-if-bigger", "stretch-if-bigger"]
    }
};

let granimInstance = new Granim(options);