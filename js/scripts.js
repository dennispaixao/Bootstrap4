$(document).ready(function () {
    //para o tooltip
     $('[data-toggle="tooltip"]').tooltip();
     //para carrossel
     $("#mycarousel").carousel( { interval: 4000 } );
     $("#carouselButton").click(function(){
         if ($("#carouselButton").children("span").hasClass('fa-pause')) {
             $("#mycarousel").carousel('pause');
             $("#carouselButton").children("span").removeClass('fa-pause');
             $("#carouselButton").children("span").addClass('fa-play');
         }
         else if ($("#carouselButton").children("span").hasClass('fa-play')){
             $("#mycarousel").carousel('cycle');
             $("#carouselButton").children("span").removeClass('fa-play');
             $("#carouselButton").children("span").addClass('fa-pause');                    
         }
     });
     //modals events
     $("#btn-Login").click(function(){
        $("#loginModal").modal('toggle');
     })
     $("#btn-ReserveTable").click(function(){
        $("#ReserveTableModal").modal('toggle');
     })   
 });

 