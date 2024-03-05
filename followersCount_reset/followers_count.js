let count = 0;

function increaseCount()
{
    count++;
    displayCount();
    checkCountValue(); // Check count value and display messages
}

function displayCount()
{
    document.getElementById('countDisplay').innerHTML=count;
}

function resetCount()
{
    count = 0
    document.getElementById('countDisplay').innerHTML=count;
    alert("Followers count has been reset.");
}

function checkCountValue()
{
    if (count === 10)
    {
        alert("Your instagram post gained 10 followers! Congratulations");
    }
    else if (count === 20)
    {
        alert("Your instagram post gained 20 followers! Keep it up!");
    }
}
