

const navbar = ()=>{
    return `  <div id="navfirst">
    <a href="index.html"><img src="TSprojectLogo.png" alt=""></a>
    <ul>
        <li>More Travels
            <div class="dropdown">
                <ul>
                    <li><a href="index.html"><i class="fas fa-building"></i>Stays</a></li>
                    <li><a href="#"><i class="fas fa-plane"></i>Flights</a></li>
                    <li><a href="#"><i class="fas fa-suitcase-rolling"></i>Packages</a></li>
                    <li><a href="#"><i class="fas fa-car"></i>Cars</a></li>
                    <li><a href="#"><i class="fas fa-ship"></i>Cruises</a></li>
                    <li><a href="#"><i class="fas fa-ticket-alt"></i>Things To Do</a></li>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Groups & Meetings</a></li>
                    <li><a href="#">Travel Blogs</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>
<div id="navsecond">
    <ul>
        <a href="#"><li>Espanol</li></a>
        <a href="#"><li>List your property</li></a>
        <a href="#"><li>Support</li></a>
        <a href="#"><li>Trips</li></a>
        <a href="#"><li>Signup</li></a>
    </ul>
</div> `
};


export default navbar;