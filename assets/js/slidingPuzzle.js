var timerObj;

new Vue({
    el: '#app',
    data: {
        moves: 0,
        time: '',
        initialTime: '',
        endTime: '',
        gameHasEnded: false,
        pieces: [{'id': 'piece1', 'neighbors':['piece4', 'piece7']}, {'id': 'piece2', 'neighbors':['piece5', 'piece6', 'piece9']}, {'id': 'piece3', 'neighbors':['piece7', 'piece8']}, {'id': 'piece4', 'neighbors':['piece1', 'piece5', 'piece9']}, {'id': 'piece5', 'neighbors':['piece4', 'piece2']}, {'id': 'piece6', 'neighbors':['piece2', 'piece8']}, {'id': 'piece7', 'neighbors':['piece1', 'piece3', 'piece9']}, {'id': 'piece8', 'neighbors':['piece3', 'piece6', 'piece9']}, {'id': 'piece9', 'neighbors':['piece2', 'piece4', 'piece7', 'piece8']}],
        piecesPosition: [['piece3', 'piece8', 'piece6'], ['piece7', 'piece9', 'piece2'], ['piece1', 'piece4', 'piece5']],
        finalPosition: [['piece1', 'piece2', 'piece3'], ['piece4', 'piece5', 'piece6'], ['piece7', 'piece8', 'piece9']],
        stylePiece3: {
            left: 0,
            top: 0,
            background: 'white'
        },
        stylePiece8: {
            left: '125px',
            top: 0,
            background: 'white'
        },
        stylePiece6: {
            left: '250px',
            top: 0,
            background: 'white'
        },
        stylePiece7: {
            left: 0,
            top: '125px',
            background: 'white'
        },
        stylePiece9: {
            left: '125px',
            top: '125px',
            background: 'white'
        },
        stylePiece2: {
            left: '250px',
            top: '125px',
            background: 'white'
        },
        stylePiece1: {
            left: 0,
            top: '250px',
            background: 'white'
        },
        stylePiece4: {
            left: '125px',
            top: '250px',
            background: 'white'
        },
        stylePiece5: {
            left: '250px',
            top: '250px',
            background: 'white'
        }
    },
    methods: {
        getTime: function(){
            let date = new Date();
            this.time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
        },
        startTime: function(){
            timerObj = window.setInterval(this.getTime, 100);
        },
        stopTime: function() {
            window.clearInterval(timerObj);
            timerObj = null;
        },
        findPieceById: function(pieceId) {
            for(let index = 0; index < this.pieces.length; index++){
                if (this.pieces[index].id == pieceId) {
                    return this.pieces[index];
                }
            }
        },
        hasNeighborPiece9: function(neighbors) {
            for(let index = 0; index < neighbors.length; index++){
                if (neighbors[index] == 'piece9') {
                    return true;
                }
            }
        },
        mouseOver: function(event){
            let pieceId = event.currentTarget.id;
            let piece = this.findPieceById(pieceId);
            
            if(this.hasNeighborPiece9(piece.neighbors)){
                this.changeColor(pieceId, 'green');
            }else{
                this.changeColor(pieceId, 'red');
            }
        },
        mouseLeave: function(event){
            let pieceId = event.currentTarget.id;
 
            this.changeColor(pieceId, 'white');
        },
        changeColor: function(pieceId, color){
            if(pieceId == 'piece1'){
                this.stylePiece1.background = color;
            }
            if(pieceId == 'piece2'){
                this.stylePiece2.background = color;
            }
            if(pieceId == 'piece3'){
                this.stylePiece3.background = color;
            }
            if(pieceId == 'piece4'){
                this.stylePiece4.background = color;
            }
            if(pieceId == 'piece5'){
                this.stylePiece5.background = color;
            }
            if(pieceId == 'piece6'){
                this.stylePiece6.background = color;
            }
            if(pieceId == 'piece7'){
                this.stylePiece7.background = color;
            }
            if(pieceId == 'piece8'){
                this.stylePiece8.background = color;
            }
        },
        verifyPiece: function(event){
            var piece = this.findPieceById(event.currentTarget.id);
            
            if(this.initialTime == ''){
                this.startTime();
                this.initialTime = this.time;
            }
            
            if(this.hasNeighborPiece9(piece.neighbors)){
                this.movePiece(piece.id);
                this.moves++;
                this.updateNeighbors(piece);
                this.verifyPositions();
            }
        },
        movePiece: function(id){
            let p9Left = this.stylePiece9.left;
            let p9Top = this.stylePiece9.top;
            
            if(id == 'piece1'){
                this.stylePiece9.left = this.stylePiece1.left;
                this.stylePiece9.top = this.stylePiece1.top;
                
                this.stylePiece1.left = p9Left;
                this.stylePiece1.top = p9Top;
            }else if(id == 'piece2'){
                this.stylePiece9.left = this.stylePiece2.left;
                this.stylePiece9.top = this.stylePiece2.top;
                
                this.stylePiece2.left = p9Left;
                this.stylePiece2.top = p9Top;
            }else if(id == 'piece3'){
                this.stylePiece9.left = this.stylePiece3.left;
                this.stylePiece9.top = this.stylePiece3.top;
                
                this.stylePiece3.left = p9Left;
                this.stylePiece3.top = p9Top;
            }else if(id == 'piece4'){
                this.stylePiece9.left = this.stylePiece4.left;
                this.stylePiece9.top = this.stylePiece4.top;
                
                this.stylePiece4.left = p9Left;
                this.stylePiece4.top = p9Top;
            }else if(id == 'piece5'){
                this.stylePiece9.left = this.stylePiece5.left;
                this.stylePiece9.top = this.stylePiece5.top;
                
                this.stylePiece5.left = p9Left;
                this.stylePiece5.top = p9Top;
            }else if(id == 'piece6'){
                this.stylePiece9.left = this.stylePiece6.left;
                this.stylePiece9.top = this.stylePiece6.top;
                
                this.stylePiece6.left = p9Left;
                this.stylePiece6.top = p9Top;
            }else if(id == 'piece7'){
                this.stylePiece9.left = this.stylePiece7.left;
                this.stylePiece9.top = this.stylePiece7.top;
                
                this.stylePiece7.left = p9Left;
                this.stylePiece7.top = p9Top;
            }else if(id == 'piece8'){
                this.stylePiece9.left = this.stylePiece8.left;
                this.stylePiece9.top = this.stylePiece8.top;
                
                this.stylePiece8.left = p9Left;
                this.stylePiece8.top = p9Top;
            }
        },
        updateNeighbors: function(piece){
            var piece9 = this.findPieceById('piece9');
            let neighbors = piece9.neighbors;
            
            piece9.neighbors = piece.neighbors;
            piece.neighbors = neighbors;
            
            this.updateAllNeighbors(piece.id);
            this.updatePiecesPosition(piece.id);
        },
        updateAllNeighbors: function(pieceId) {
            for(let ind = 0; ind < this.pieces.length; ind++){
                for(let index = 0; index < this.pieces[ind].neighbors.length; index++){
                    // Invert the neighbor pieces
                    if (this.pieces[ind].neighbors[index] == pieceId) {
                        this.pieces[ind].neighbors[index] = 'piece9';
                    }else if (this.pieces[ind].neighbors[index] == 'piece9') {
                        this.pieces[ind].neighbors[index] = pieceId;
                    }
                }
            }
        },
        updatePiecesPosition: function(pieceId){
            for(let index = 0; index < this.piecesPosition.length; index++){
                for(let ind = 0; ind < this.piecesPosition[index].length; ind++){
                    if(this.piecesPosition[index][ind] == pieceId){
                        this.piecesPosition[index][ind] = 'piece9';
                    }else if(this.piecesPosition[index][ind] == 'piece9'){
                        this.piecesPosition[index][ind] = pieceId;
                    }
                }
            }
        },
        verifyPositions: function(){
            for(let index = 0; index < this.piecesPosition.length; index++){
                for(let ind = 0; ind < this.finalPosition.length; ind++){
                    if(this.piecesPosition[index][ind] != this.finalPosition[index][ind]){
                        return;
                    }
                }
            }
            
            this.stopTime();
            this.endTime = this.time;
            this.gameHasEnded = true;
        },
        restartGame: function(){
            this.stylePiece3.left = 0;
            this.stylePiece3.top = 0;
            
            this.stylePiece8.left = '125px';
            this.stylePiece8.top = 0;
            
            this.stylePiece6.left = '250px';
            this.stylePiece6.top = 0;
            
            this.stylePiece7.left = 0;
            this.stylePiece7.top = '125px';
            
            this.stylePiece9.left = '125px';
            this.stylePiece9.top = '125px';
            
            this.stylePiece2.left = '250px';
            this.stylePiece2.top = '125px';
            
            this.stylePiece1.left = 0;
            this.stylePiece1.top = '250px';
            
            this.stylePiece4.left = '125px';
            this.stylePiece4.top = '250px';
            
            this.stylePiece5.left = '250px';
            this.stylePiece5.top = '250px';
            
            this.stopTime();
            this.moves = 0;
            this.time = '';
            this.initialTime = '';
            this.endTime = '';
            this.gameHasEnded = false;
            
            this.pieces = [{'id': 'piece1', 'neighbors':['piece4', 'piece7']}, {'id': 'piece2', 'neighbors':['piece5', 'piece6', 'piece9']}, {'id': 'piece3', 'neighbors':['piece7', 'piece8']}, {'id': 'piece4', 'neighbors':['piece1', 'piece5', 'piece9']}, {'id': 'piece5', 'neighbors':['piece4', 'piece2']}, {'id': 'piece6', 'neighbors':['piece2', 'piece8']}, {'id': 'piece7', 'neighbors':['piece1', 'piece3', 'piece9']}, {'id': 'piece8', 'neighbors':['piece3', 'piece6', 'piece9']}, {'id': 'piece9', 'neighbors':['piece2', 'piece4', 'piece7', 'piece8']}];
            
            this.piecesPosition = [['piece3', 'piece8', 'piece6'], ['piece7', 'piece9', 'piece2'], ['piece1', 'piece4', 'piece5']];
        }
    }
});