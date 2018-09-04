function k1() {
    let destination = document.getElementById("k1");
    let newk1 = document.createElement("p");
    for (let i=1; i<=20; i++) {
        
        newk1.appendChild(document.createTextNode(i + " "));
        
    }
    let words = ['zero', 'one', 'two', 'three'];
    let number = 5;
    alert(words[number]);
    
    destination.appendChild(newk1);

}
k1()

/*let th = ['','thousand','million', 'billion','trillion'];
let dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
let tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
let tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];*/

 