let data=[
    {
      "image": "https://himalayausa.com/collections/personal-care/products/body-bar-purifying-neem-turmeric",
      "lazyload": "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/body-bar-purifying-neem-turmeric-342355_800x.png?v=1660858341",
      "title": "Body Bar: Purifying (Neem & Turmeric)",
      "price": "$4.99",
      "description": "Himalaya Botanique Purifying Neem & Turmeric Body Bar is a handcrafted combination of pure herbs and saponified essential oils that gently cleanse and moisturize. History’s original cleansing and detox plant,..."
    },
    {
      "image": "https://himalayausa.com/collections/personal-care/products/body-bar-refreshing-lavender-rosemary",
      "lazyload": "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/body-bar-refreshing-lavender-rosemary-879892_800x.png?v=1660858358",
      "title": "Body Bar: Refreshing (Lavender & Rosemary)",
      "price": "$4.99",
      "description": "Calm your senses and rejuvenate your spirit with Himalaya Botanique's Lavender & Rosemary Body Bar. Rosemary awakens the senses and Lavendar leaves your skin feeling relaxed and clean. Gentle oils..."
    },
    {
      "image": "https://himalayausa.com/collections/personal-care/products/chest-balm-p-m",
      "lazyload": "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/chest-balm-pm-819164_800x.png?v=1660813421",
      "title": "Chest Balm P.M.",
      "price": "$7.99",
      "description": "Need something warm to relax and comfort you? Himalaya Chest Balm PM surrounds you with the welcoming respite of Turmeric and Holy Basil, while Eucalyptus vapors softly soothe you. Light..."
    },
    {
      "image": "https://himalayausa.com/collections/personal-care/products/face-scrub-exfoliating-walnut-wood-apple",
      "lazyload": "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/face-scrub-exfoliating-walnut-wood-apple-119171_800x.png?v=1660813418",
      "title": "Face Scrub: Exfoliating (Walnut & Wood Apple)",
      "price": "$8.99",
      "description": "After exfoliating, does your face feel dry? Unlike common face scrubs, Himalaya Walnut & Wood Apple Face Scrub deep cleans with moisture for pure, smooth & healthy-looking skin, with no..."
    },
    {
      "image": "https://himalayausa.com/collections/personal-care/products/face-wash-balancing-neem-turmeric",
      "lazyload": "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/face-wash-balancing-neem-turmeric-914790_800x.png?v=1660813411",
      "title": "Face Wash: Balancing (Neem & Turmeric)",
      "price": "$8.99",
      "description": "Himalaya Botanique Neem and Turmeric Face Wash brings balance back to your daily cleansing, with gentle, deep-cleaning ingredients. Neem cleans oily skin and helps reduce occasional acne. Turmeric supports clear,..."
    },
    {
      "image": "https://himalayausa.com/collections/personal-care/products/face-wash-hydrating",
      "lazyload": "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/face-wash-hydrating-797207_800x.png?v=1660858314",
      "title": "Face Wash: Hydrating",
      "price": "$8.99",
      "description": "Why put up with overly-drying soaps and cleansers? Treat your skin to radiant, luxurious and lather-rich Himalaya Botanique Hydrating Face Wash. Aloe Vera helps bring out your skin’s natural moisture,..."
    },
    {
      "image": "https://himalayausa.com/collections/personal-care/products/face-wash-invigorating",
      "lazyload": "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/face-wash-invigorating-397240_800x.png?v=1660858334",
      "title": "Face Wash: Invigorating",
      "price": "$8.99",
      "description": "Give your skin a healthy-looking glow every day with Himalaya Botanique Invigorating Face Wash. Extracts of Cinnamon Bark awaken and invigorate your face for a fresh feeling, Lemon Peel uplifts..."
    },
    {
      "image": "https://himalayausa.com/collections/personal-care/products/warming-body-balm",
      "lazyload": "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/warming-body-balm-370691_800x.png?v=1660858353",
      "title": "Warming Body Balm",
      "price": "$7.99",
      "description": "A unique blend of organic essential oils gently soothe away stress and fatigue from your overexerted muscles, leaving your body relaxed and comforted. Rosemary warms and soothes sore spots, Lemon..."
    }
   ]


   let cartArr=JSON.parse(localStorage.getItem("cart"))||[]
   let cont=document.getElementById("container")
   diaspalyTable(data)
   function diaspalyTable(data){
   cont.innerHTML=null
    data.forEach((el)=> {
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.lazyload
        let title=document.createElement("h3")
        title.innerText=el.title
        let price=document.createElement("h1")
        price.innerText=el.price
        let btn=document.createElement("button")
        btn.innerText="ADD TO CART"
        btn.addEventListener("click",function(){
          addcart(el)
        })
        div.append(image,title,price,btn)
        cont.append(div)
        
    });
   }
 
   function addcart(el){
    cartArr.push(el)
    console.log(cartArr)
    localStorage.setItem("cart",JSON.stringify(cartArr))
    alert("Added to cart")
    
}




  
document.querySelector("#sortName").addEventListener("change",nameSort)

    function nameSort(){
      let selected=document.querySelector("#sortName").value
      if(selected=="Name Ascending"){
        
        data.sort(function(a,b){
        let x=a.title.toUpperCase()
        let y=b.title.toUpperCase()
          if(x>y) return 1
          if(y>x) return -1
          return 0
        })
        
      }
      if(selected=="Name Descending"){
        data.sort(function(a,b){
        let x=a.title.toUpperCase()
        let y=b.title.toUpperCase()
          if(x>y) return -1
          if(y>x) return  1
          return 0
        })
        
        
      }
      if(selected=="Price Ascending"){
        
        data.sort(function(a,b){
        let x=a.price.toUpperCase()
        let y=b.price.toUpperCase()
          if(x>y) return 1
          if(y>x) return -1
          return 0
        })
        
      }
      if(selected=="Price Descending"){
        data.sort(function(a,b){
        let x=a.price.toUpperCase()
        let y=b.price.toUpperCase()
          if(x>y) return -1
          if(y>x) return  1
          return 0
        })
        
        
      }
      
      diaspalyTable(data)
      
    }