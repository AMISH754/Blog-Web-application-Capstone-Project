const output=document.querySelector(".output")
const toolbarOptions=[  [{ header: [1, 2,3,5, false] }],
      ['bold', 'italic', 'underline'],
    [{color:[]}, {background:[] }],
    [{list:"ordered"},{list:"bullet"},{list:"check"}]
       
    
    ];
  const quill = new Quill('#editor', {
    theme: "snow",
    modules:{
      toolbar:toolbarOptions,
    }
  });
  
