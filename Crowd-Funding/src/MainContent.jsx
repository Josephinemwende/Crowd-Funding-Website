import Card from './card';
function MainContent(){
    return(
        <>
            <h1>About this project</h1>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                your screen to a more comfortable viewing height. Placing your monitor at eye level has
                the potential to improve your posture and make you comfortable while at work, helping
                you stay focused on the task at hand.
            </p>
            <p>Featuring artisan craftmanship, the simplicity of the design creates extra desk space below
                your computer to allow notepads,pens,and USB sticks to be stored under the stand.
            </p>
            <Card
                title="Bamboo Stand"
                h3="pledge $25 or more"
                content="You get an ergonomic stand made of natural bamboo. You've helped us launch our
                promotional campaign, and you'll be added to a special Backer member list."
                button="Select Reward"
            />
            <Card
                title="Black Edition Stand"
                h3="pledge $75 or more"
                content="You get a Black special Edition computer stand and a personal thank you. You'll be added to our Backer member list.
                Shipping is included."
                button="Select Reward"
            />
            <Card
                title="Mahogany Special Edition"
                h3="pledge $200 or more"
                content="You get two special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
                You'll be added to our Backer member list. Shipping is included."
                button="Out of stock"
            />
            
        </>
    );
}
export default MainContent;