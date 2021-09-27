const presidentDetails = [
    {
        _id: 101112, 
        img: 'https://c.ndtvimg.com/2021-03/4iaeh19_joe-biden-afp650_625x300_26_March_21.jpg', 
        name: 'Joe Biden', 
        party: 'Democratic Party', 
        position: 'President', 
        country: 'USA', 
        donation: 589
    },
    {
        _id: 131415, 
        img: 'https://static01.nyt.com/images/2020/06/03/world/03unrest-canada/03unrest-canada-mediumSquareAt3X.jpg', 
        name: 'Justin Trudeau', 
        party: 'Liberal Party of Canada', 
        position: 'Prime Minister', 
        country: 'Canada', 
        donation: 755
    },
    {
        _id: 161718, 
        img: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/12/03/2b021014-3555-11eb-8d89-a7d6b31c4b8a_image_hires_200030.jpg?itok=RtDdMBcj&v=1606996841', 
        name: 'Scott Morrison', 
        party: 'Liberal Party of Australia', 
        position: 'Prime Minister', 
        country: 'Australia', 
        donation: 490
    },
    {
        _id: 192021, 
        img: 'https://timesofindia.indiatimes.com/photo/80769655.cms', 
        name: 'Boris Johnson', 
        party: 'Conservative Party', 
        position: 'Prime Minister', 
        country: 'United Kingdom', 
        donation: 840
    },
    {
        _id: 222324, 
        img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/07/22/130308.jpg', 
        name: 'Angela Merkel', 
        party: 'Christian Democratic Union of Germany', 
        position: 'Chancellor', 
        country: 'Germany', 
        donation: 400
    },
    {
        _id: 232425, 
        img: 'https://www.wantedinrome.com/i/preview/storage/uploads/2021/05/italian-prime-minister-mario-draghi-works-for-free.jpeg', 
        name: 'Mario Draghi', 
        party: 'Independent Politician', 
        position: 'Prime Minister', 
        country: 'Italy', 
        donation: 290
    },
    {
        _id: 262728, 
        img: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/BCPVOW3NARNMJA6TXAQ5NOZMTI.jpg', 
        name: 'Yoshihide Suga', 
        party: 'Liberal Democratic Party', 
        position: 'Prime Minister', 
        country: 'Japan', 
        donation: 558
    },
    {
        _id: 293031, 
        img: 'https://pbs.twimg.com/media/E155DGOXMAc5DoM.jpg', 
        name: 'Ursula von der Leyen', 
        party: "European People's Party group", 
        position: 'President', 
        country: 'German', 
        donation: 800
    },
    {
        _id: 323334, 
        img: 'https://www.aljazeera.com/wp-content/uploads/2021/05/371984596.jpg?resize=1200%2C630', 
        name: 'Recep Tayyip Erdoğan', 
        party: 'Justice and Development Party', 
        position: 'President', 
        country: 'Turkey', 
        donation: 980
    },
    {
        _id: 353637, 
        img: 'https://i.insider.com/5c926524124d04450e4219ea?width=1000&format=jpeg&auto=webp', 
        name: 'Jacinda Ardern', 
        party: 'New Zealand Labour Party', 
        position: 'Prime Minister', 
        country: 'New Zealand', 
        donation: 1000
    },
    {
        _id: 383940, 
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/949C/production/_117644083_7f32207f-2ebd-4108-9823-e555ce303e64.jpg', 
        name: 'Imran Khan', 
        party: 'Pakistan Tehreek-e-Insaf', 
        position: 'Prime Minister', 
        country: 'Pakistan', 
        donation: 1460
    },
    {
        _id: 414243, 
        img: 'https://s.france24.com/media/display/65b4832c-e321-11e9-9d94-005056a98db9/kurtz.jpg', 
        name: 'Sebastian Kurz', 
        party: "Austrian People's Party", 
        position: 'Chancellor', 
        country: 'Austria', 
        donation: 155
    },
    {
        _id: 444546, 
        img: 'https://www.government.nl/binaries/large/content/gallery/government/content-afbeeldingen/government/bewindspersonen/kabinet-rutte-iii/mark-rutte/mark-rutte-1920.jpg', 
        name: 'Mark Rutte', 
        party: "People's Party for Freedom and Democracy", 
        position: 'Prime Minister', 
        country: 'Netherlands', 
        donation: 360
    },
    {
        _id: 474849, 
        img: 'https://img2.chinadaily.com.cn/images/201904/23/5cbe88d9a3104842e4a9f447.jpeg', 
        name: 'Ueli Maurer', 
        party: "Swiss People's Party", 
        position: 'Member of the Swiss Federal Council', 
        country: 'Switzerland', 
        donation: 500
    },
    {
        _id: 505152, 
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/11FEC/production/_120580737_res-hi070636957.jpg', 
        name: 'Michael D. Higgins', 
        party: 'Independent', 
        position: 'President', 
        country: 'Ireland', 
        donation: 700
    }
];