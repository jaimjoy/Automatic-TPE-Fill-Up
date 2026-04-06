javascript:(function()
{
document.querySelectorAll('input[type="radio"][value="5"]').forEach(r=>{
r.checked=true;
r.dispatchEvent(new Event('change',{bubbles:true}));
});

var t=document.querySelector('#Comment');
if(t){t.value="Good";t.dispatchEvent(new Event('input',{bubbles:true}));}

document.querySelector('form').submit();
})();