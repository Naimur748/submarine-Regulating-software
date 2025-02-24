class specialheader extends HTMLElement{
            
    connectedCallback(){
        // let allLinks = document.querySelectorAll('a');
        // allLinks.forEach(function(links){
        //     links.addEventListener('click',function(){
        //         links.style.backgroundColor= 'lightblue';
        //     })
        // })
        
 




        this.innerHTML = `

        <style>
    /* Style for the container and content */
    *{
       
        /* margin-left: 0px; */
    }
    .scroll-container {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 2;


      width: 300px;
      overflow-y: auto;
      border: 1px solid #ccc;
      margin-top: 52px;
      margin-left: -350px; /* Initial margin for the left-side navigation bar */
      transition: margin-left 0.3s ease; /* Add transition for smooth animation */
      
    }
    

    .content {
   
      height: 50px;
      background-color: #ccc;
      overflow-y: auto;
      margin-top: 2px;
      margin-right: 10px; 
      background-color: #333;
      border-radius: 5px;
      text-align: center;
      color: aqua; 
      text-transform: uppercase;
      line-height: 40px;
      font-size: 17px;
      cursor: pointer;
   
      
    }
    .content:hover{
      color:#AAD7D9;
      background-color: #93B1A6;
    }

    /* Style for the left-side navigation bar */
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      /* height: 100%;
      width: 50px; Adjust the width of your sidebar */
      background-color: #333;
      color: white;
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      z-index: 1;
      border-radius: 5px;
      width: 210px;
      text-transform: uppercase;
    }
    .m-vcontainer{
      white-space: nowrap; /* Prevent child divs from wrapping to the next line */
      overflow-x: auto; /* Enable horizontal scrolling */
      width: 100vw; 
      height: 70px;
      position:fixed;
      z-index:1;
   

      /* 
      top: 0;
      left: 0;
      height: 100px;
      width: 100vh;
      overflow-x: auto;
      border: 1px solid #ccc;
      float: left;
     
      margin-left: 0; Initial margin for the left-side navigation bar */
      
    }
    .allcontainer{
      display: inline-block;
      width: 200px; /* Set a fixed width for each child div */
      height: 40px; /* Set a fixed height for each child div */
      margin-right: 2px; /* Optional: Add some spacing between child divs */
      background-color: #ccc; 
      line-height: 40px;
      color: aqua; 
      text-transform: uppercase;
      border-radius: 5px;
      cursor: pointer; 
      background-color: #333;
      text-align: center;
      
     
       /* height: 30px;
      white-space: nowrap;
      width: 200px;
     
      overflow-x: auto;
      display: inline-block;
      margin-top: 5px;
      margin-right: 10px; 
      
      font-size: 17px; */
    }
    #specificElement::-webkit-scrollbar {
      display: none;
    }

    #thumbn::-webkit-scrollbar {
      width: 12px; /* Set the width of the scrollbar track */
      height: 12px; /* Set the height of the scrollbar track */
    }
    #thumbn::-webkit-scrollbar-track {
      background-color: gray; /* Color of the scrollbar track */
    }
    #thumbn::-webkit-scrollbar-thumb {
      background-color: darkmagenta; /* Color of the scrollbar thumb */
      border-radius: 10px; /* Optional: Set border-radius for rounded corners */
      height:5px;
    }
    a{
        text-decoration:none;
        color:aqua;
        display:block;
        width:100%;
       
      }
      a:hover{
        color:black;
      }




  </style>
</head>
<body>

  <div class="m-vcontainer" id="specificElement">
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
    <div class="allcontainer">Bangladesh navy</div>
   
  </div>

<!-- Left-side navigation bar -->
<div class="sidebar" onclick="toggleSidebar()" >
 &#9776; Menu
</div>



<!-- Container for horizontally scrolling content -->
<div class="scroll-container" id="thumbn" >
<!-- Content items, add more as needed -->
<div class="content"><a class="atag" href="stateboard.html">Live state board</a></div>
<div class="content"><a class="atag" href="index.html">genform making</a></div>
<div class="content"><a class="atag" href="gxbook.html">gx book</a></div>
<div class="content"><a class="atag" href="shnshipscompany.html">shn ships company</a></div>
<div class="content"><a class="atag" href="leaverequestform.html">Leave request form</a></div>
<div class="content"><a class="atag" href="victualling.html">Gangway victualling</a></div>
<div class="content"><a class="atag" href="checksheet.html">gangway check book </a></div>
<div class="content"><a class="atag" href="leavedayribook.html">Leave diary book</a></div>
  <div class="content"><a class="atag" href="requestconditionn.html">All request condition </a></div>
  <div class="content"><a class="atag" href="manualofnavallaw.html"> Manual of Navak law</a></div>
  <div class="content"><a class="atag" href="part1.html">navy regulation part1</a></div>
  <div class="content"><a class="atag" href="part2.html">navy regulation part2</a></div>
  <div class="content"><a class="atag" href="leavedayribook.html">Leave diary book</a></div>
  <div class="content"><a class="atag" href="leavedayribook.html">Leave diary book</a></div>
  <div class="content"><a class="atag" href="leavedayribook.html">Leave diary book</a></div>
  <div class="content"><a class="atag" href="leavedayribook.html">Leave diary book</a></div>
 
  
  <!-- Add more content items as needed -->
</div>




<div>

</div>
</body>
</html>
        
        
        `
    }

    
}
 // Function to toggle the visibility of the left-side navigation bar
 function toggleSidebar() {
    const container = document.querySelector('.scroll-container');
    
    // Toggle the margin to show/hide the left-side navigation bar
    container.style.marginLeft = container.style.marginLeft === '0px' ? '-350px' : '0px';
  }

customElements.define('special-header', specialheader)



