'use strict';


function MyCtrl($scope){
    
     $scope.select = function(p){
        return "ativado"
        
     }

    $scope.projetos = [
        {
            "id": "0", 
            "image": "01.png", 
            "name": "Daniel Telles", 
            "resumo": "tra lala ssdaa",
            "oquefaz": "Gerente de Projétos"
        },
        {
            "id": "0", 
            "image": "02.png", 
            "name": "Marcelo Azevedo", 
            "resumo": "So teste Mesmo",
            "oquefaz": "Gerente de Projétos"
        }
    ]
};
