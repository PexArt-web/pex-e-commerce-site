import FlashCart from "./FlashCart";
import FlashSalesCountdown from "./FlashSalesTime";

const ShowFlash = () => {
    const flashCart = [
        {
            id: 1,
            category: "Electronics",
            title: "Sleek Modern Laptop for Professionals",
            image:
              "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FItHcq7o.jpeg&w=640&q=75",
            price: 97,
            discription:
              "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
          },
          {
            id: 2,
            category: "Electronics",
            title: "Sleek Modern Laptop with Ambient Lighting",
            image:
              "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FOKn1KFI.jpeg&w=640&q=75",
            price: 43,
            discription:
              "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
          },
          {
            id: 3,
            category: "Electronics",
            title: "Sleek Wireless Computer Mouse",
            image:
              "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2Fw3Y8NwQ.jpeg&w=640&q=75",
            price: 80,
            discription:
              "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
          },
          {
            id: 4,
            category: "Electronics",
            title: "Efficient 2-Slice Toaster",
            image:
              "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FkeVCVIa.jpeg&w=640&q=75",
            price: 48,
            discription:
              "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
          },
         
        {
            id: 5,
            title: `Universal Lazy Bracket Mobile Phone Holder Gooseneck Stand`,
            category: "Electronics",
            image:
              "https://i.etsystatic.com/50939902/r/il/1826d4/5840851640/il_794xN.5840851640_12y1.jpg",
            discription: `Introducing the ultimate companion for your device: the Phone Holder! 📱✨
        
                Imagine a sleek, stylish accessory that effortlessly cradles your precious phone, keeping it safe, secure, and oh-so accessible. 🤩
                
                Crafted with precision and innovation, this marvel of modern design is more than just a holder; it's a statement piece! 💫
                
                Picture the convenience of hands-free browsing, video calls, or watching your favorite shows without the hassle of constantly gripping your device. 🎬📞
                
                With its adjustable angles and sturdy grip, this holder ensures the perfect viewing position every time, whether you're lounging on the couch, working at your desk, or even cooking up a storm in the kitchen! 🛋️💼👩‍🍳
                
                Gone are the days of fumbling for your phone or propping it up precariously with random objects. With the Phone Holder by your side, convenience and elegance go hand in hand. 🙌💖
                
                Embrace the future of device management and elevate your tech experience with the Phone Holder today! 🚀🌟`,
            price: 10.37,
            // rating: ratedex,
            // ratingId: ratingStar
          },
          {
            id: 6,
            category: "Electronics",
            title: `Vintage Retro GREEN Rotary Dial TELEPH ONE`,
            image:
              "https://i.etsystatic.com/13256166/r/il/e00bcf/5821893246/il_794xN.5821893246_cl48.jpg",
            price: 54.6,
            discription: `Vintage Australian AWA TELECOM rotary dial phone
                Dates from the 1970s
                In Working order when last used
                Excellent condition, clean and shiny exterior with no flaws.`,
            // rating: ratedex,
            // ratingId: ratingStar
          },
        
          {
            id: 7,
            title: `Audio Guestbook (Reusable)`,
            image:
              "https://i.etsystatic.com/38341300/r/il/fcacf2/5305677330/il_794xN.5305677330_jyum.jpg",
            discription: `Wedding Audio Guestbooks - Brand New Canadian Seller / Fully made using Canadian products.
        
                This is not an overseas model, this is entirely handmade. If you have any questions or concerns please let me know, I would be happy to help!`,
            price: 244.87,
            category: "Electronics",
          },
          {
            id: 8,
            title: `Antique Danish telephone`,
            image:
              "https://i.etsystatic.com/40634112/r/il/7105eb/5792603195/il_794xN.5792603195_lv2y.jpg",
            discription: `Fantastic antique hand crank telephone from Denmark, dating from the early 1900s to perhaps the 1920s. This is the Jydsk Telefon Aktieselskab, which is marked on both sides with a blue, red and gold coat of arms in an ornate gold frame. The base of the phone is metal with black and gold enamel and on top it has a metal handset with a Bakelite earpiece, black ribbed wooden handle and Bakelite mouthpiece. The phone comes with an additional silver-colored metal mouthpiece.
        
                The phone comes with two long fabric-covered cords that connect the headset to the base and plug, but the original plug doesn't work in the US and hasn't been tested. When the laptop is undocked, turning the crank (a necessary step to raise it) causes the two bells at the base to ring loudly.
                
                This phone is in very good condition for its age
                
                Dimensions: With the headset on, the phone is 10 inches wide x 5 inches deep x 12.75 inches high (25.4 x 12.7 x 32.4 cm)`,
            price: 311.18,
            category: "Electronics",
          },
          {
            id: 9,
            title: `Spider sony XM4 XM5`,
            image:
              "https://i.etsystatic.com/39890432/r/il/df19b0/5855074141/il_794xN.5855074141_4yc4.jpg",
            discription: `Introducing Spider Metal Headphone Attachments: Elevate Your Audio Experience!
                Are you tired of flimsy headphone accessories that break easily? Say goodbye to cheap plastic and hello to Spider Metal Headphone Attachments – the ultimate solution for durability and style in one sleek package.`,
            price: 36.01,
            category: "Electronics",
          },
    ]

    const flashCartElement = flashCart.map(element=> (
        <FlashCart {...element} key={element.id}/>
    ))
    const flashCartStyles = {
        overflowX:'scroll'
    };
  return (
    <section className="card overflow-hidden mb-3 p-3">
      <FlashSalesCountdown />
      <div className="d-flex mb-1 " style={flashCartStyles}>
      {flashCartElement}
      </div>
      <button className="btn btn-danger mb-3">View All Products</button>
      
    </section>
  );
};

export default ShowFlash;
