const mobileMenuBtn = document.getElementById("mobile-menu");
const closeMobileMenuBtn = document.getElementById("close-mobile-menu");

[...document.querySelectorAll(".wixui-vertical-menu__item-label"), closeMobileMenuBtn].forEach(el => {
  el?.addEventListener("click", function () {
    const menu = document.getElementById("comp-kbgakxea_r_comp-lxu2mi3c");
    menu.classList.remove("menu-visible")
  })
})
mobileMenuBtn?.addEventListener("click", function () {
  const menu = document.getElementById("comp-kbgakxea_r_comp-lxu2mi3c");
  menu.classList.add("menu-visible")
})


/**
 * qna tab section start
 */
let currentTab = "g";
const qnaData = [
  {
    type: "g",
    question: "What is a Point of Sale Solution?",
    answer: `<p>POS is a combination of hardware and software that your businesses use to process customer transactions and manage your business operations.</p>`
  },
  {
    type: "g",
    question: "Why Aveade Point of Sale (POS) Important to me?",
    answer: `<p>This solution enable your business to offer your products in store to online customers when you list them on the Aveade Marketplace. In essence, it provide multiple streams of sales channel for your business.</p>`
  },
  {
    type: "g",
    question: "How does Aveade Point of Sale (POS) work?",
    answer: `<p>Today you are running your business in-store in one area or multiple, your challenge is to have online presence due to your current setup. Aveade Point of Sale offers you a simplied solution, is a software that works with your current hardware but gives you the ability to have online presence. You use your current hardware but you get online presence when you come to join Aveade Marketplace.</p>`
  },
  {
    type: "g",
    question: "Do Aveade Point of Sale (POS) come with Hardware?",
    answer: `<p>No, Aveade Point of Sale (POS) comes with online customers and solution for your in-store business operation. It works with any hardware setup of your choice, you own the hardware either desktop, tablet, mobile devices, kiosk set up and or any other devices that you can use to process a transaction with the customer.</p>`
  },
  {
    type: "g",
    question: "What hardware recommendations do you support?",
    answer: `<p>For small business we recommend tablet or iPad, you can purchase this from your local stores, online on Aveade.com or alternative and start setting up your Aveade Point of Sale (POS), if you are mobile you can take it anywhere with you in every part of the world and continue to do business as usual.</p><p>For medium businesses that already have setup, we recommend you continue to use your current setup, with our software to access those online customers and reduce cost to stay profitable.</p><p>For Enterprise we recommend custom solution that requires complex setup with minimal cost. We provide a software that works with current technologies and making it possible to reduce cost.</p>`
  },
  {
    type: "g",
    question: "Can I print Slip, Receipts and Barcodes?",
    answer: `<p>Yes, with Aveade Point of Sale (POS) you can print slip or receipts for your sales, and can also assign and print barcodes for your offering. You may use existing barcodes or generate new Aveade Barcode for non-branded product offerings.</p>`
  },
  {
    type: "g",
    question: "Can I purchase Third-party Hardware and use Aveade Point of Sale (POS)?",
    answer: `<p>Yes, you may use any third-party hardware product that are compatible with running modern Apps and Software to easily start selling in your store and online. There is no hardware lock-in with Aveade Point of Sale (POS) you choose the harware you like that is also open for other possibilities.</p>`
  },
  {
    type: "g",
    question: "How much does it cost to use Aveade Point of Sale (POS)?",
    answer: `<p>Aveade Point of Sale software is completely free, you do not pay for features, you only pay when you transact, if no sale with our free plan, you do not pay, not even a cent, you pay for the support you require when you move to another plan that reduces transaction cost. Features are important for you to expand and run your business, not to increase cost of doing business.</p>`
  },
  {
    type: "g",
    question: "My products offering will be featured on Aveade Online Shopping?",
    answer: `<p>Yes, provided you require both in-store and online solution, the plan above is dedicated to the Aveade Point of Sale (POS) only, when you require option to have an online presence we will enable the marketplace function for your stores.</p>`
  },
  {
    type: "g",
    question: "My products offering will be featured on Aveade Online Shopping?",
    answer: `<p>Yes, provided you require both in-store and online solution, the plan above is dedicated to the Aveade Point of Sale (POS) only, when you require option to have an online presence we will enable the marketplace function for your stores.</p>`
  },
  {
    type: "g",
    question: "My products offering will be featured on Aveade Online Shopping?",
    answer: `<p>Yes, provided you require both in-store and online solution, the plan above is dedicated to the Aveade Point of Sale (POS) only, when you require option to have an online presence we will enable the marketplace function for your stores.</p>`
  },
  {
    type: "g",
    question: "My products offering will be featured on Aveade Online Shopping?",
    answer: `<p>Yes, provided you require both in-store and online solution, the plan above is dedicated to the Aveade Point of Sale (POS) only, when you require option to have an online presence we will enable the marketplace function for your stores.</p>`
  },
  {
    type: "q",
    question: "My Account is the master account?",
    answer: `<p>Yes, you can still set up other account users to have same level of permission as you. And control other accounts and see what they are doing and when they are working or not.</p>`
  },
  {
    type: "q",
    question: "How do I register or setup my business?",
    answer: `<p>To get started, first you need to create an account by clicking get started and follow the easy account creation process. Once you completed you will receive your login information by email, make sure you have an active email and sign in to Aveade Seller Central to start with your operations.</p>`
  },
  {
    type: "q",
    question: "What Documents are required for the setup?",
    answer: `<p>You may be able to create the account, however to start transacting we will require official documents to verify your account. In the event where your name is already taken, you may need to use alternative name. We recommend you create an account to protect your name.</p>`
  },
  {
    type: "q",
    question: "Do you provide setup assistant?",
    answer: `<p>Yes, we will provide Live support for setup for free, or might have one of our technical experts in your area to come help you with initial setup.</p>`
  },
  {
    type: "q",
    question: "Can I manage my users profile on my setup?",
    answer: `<p>Yes, you can manage everyone. Restrict what users can access and can't access or what users can see or can't see. Control is back to you at no additional charges.</p>`
  }
];

const generateQna = (type = null, value = null) => {
  let data = type ? qnaData.filter(q => q.type === type) : qnaData;
  if (value && value !== "") {
    data = data.filter(q => q.question.toLowerCase().includes(value.toLowerCase()) || q.answer.toLowerCase().includes(value.toLowerCase()))
  }
  let html = "";
  const template = document.getElementById("qna-template");
  data.forEach(d => {
    const div = document.createElement("div");
    div.innerHTML = template.innerHTML;
    div.querySelector("[data-question]").innerHTML = d.question
    div.querySelector("[data-answer]").innerHTML = d.answer
    html += div.innerHTML;
  });
  document.getElementById("qna-wrapper").innerHTML = html;
}
// initial qna is general
generateQna("g")
document.getElementById("qna-search-input")?.addEventListener("input", function (ev) {
  const value = ev.target.value;
  generateQna("", value)
})

const tabs = document.querySelectorAll(".qna-tab");

tabs.forEach(el => {
  el.addEventListener("click", function (ev) {
    generateQna(ev.currentTarget.getAttribute("data-type"))
    tabs.forEach(t => t.classList.remove("ouODEjb--isActive"))
    ev.currentTarget.classList.add("ouODEjb--isActive")
  })
})

const collapsibles = document.querySelectorAll(".collapsible");
document.addEventListener("click", function (ev) {
  const btn = ev.target.closest(".collapsible");
  if (btn) {
    const allBtns = document.querySelectorAll(".collapsible");
    allBtns.forEach(b => {
      if (btn !== b) {
        const content = b.nextElementSibling;
        content?.classList.remove("collapsible-visible")
        b?.classList.remove("collapsible-active")
      }
    })
    const content = btn.nextElementSibling;
    content.classList.toggle("collapsible-visible")
    btn.classList.toggle("collapsible-active")
  }
})

/**
 * qna tab section ends
 */

/**
 * video play stop pause
 */

document.querySelectorAll(".video-pause-icon").forEach(el => {
  el.addEventListener("click", function (ev) {
    const wrap = ev.target.closest(".video-wrapper")
    if (wrap) {
      console.log("my wrap pause", wrap)
      wrap.querySelector("video")?.pause();
      wrap.setAttribute("data-playing", "false")
    }
  })
})
document.querySelectorAll(".video-play-icon").forEach(el => {
  el.addEventListener("click", function (ev) {
    const wrap = ev.target.closest(".video-wrapper")
    if (wrap) {
      console.log("my wrap play", wrap)
      wrap.querySelector("video")?.play();
      wrap.setAttribute("data-playing", "true")
    }
  })
})

// Observe elements as they scroll into view
const observer = new IntersectionObserver(entries => {
  const txt = document.querySelector(".text-to-hide-on-ovarlay")
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (txt) {
        txt.style.opacity = 0;
      }
    } else {
      if (txt) {
        txt.style.opacity = 1;
      }// remove if you want to hide again
    }
  });
}, {
  // rootMargin: "-100px",
  threshold: 0.5 // adjust sensitivity (0.3 = 30% visible)
});

if(window.innerWidth > 1000){
  // Attach observer to all text-slide-up elements
  document.querySelectorAll('.card-observer-to-hide-title').forEach(el => observer.observe(el));

}