(function(){
const cfg=window.CRAZY_CONFIG||{};const ready=!!(cfg.supabaseUrl&&cfg.supabaseAnonKey);
const api=ready?window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey):null;
window.crazyApi=api;
const $=id=>document.getElementById(id);
async function load(){if(!api)return;const {data,error}=await api.from('site_settings').select('content').eq('id',1).maybeSingle();if(error){console.warn(error);return}if(data?.content){const c=data.content;for(const key of ['packages','fees','pizzas','gallery','heroText'])if(c[key])db[key]=c[key];translate();}}
async function sendBooking(e){e.preventDefault();const feedback=$('formFeedback');if(!api){feedback.textContent='Online booking is being connected. Please call (818) 749-5050.';return}
const c=compute();if(selected.length!==c.p.count){feedback.textContent='Please select all pizza varieties first.';return}
const date=$('eventDate').value;if(!date){feedback.textContent='Please select a date.';return}
const b={date,event_time:$('eventTime').value,customer_name:$('clientName').value.trim(),phone:$('clientPhone').value.trim(),email:$('clientEmail').value.trim(),contact_method:$('contactMethod').value,address:$('address').value,notes:$('notes').value,guests:c.g,package_name:c.p.name,pizzas:[...selected],salads:[...selectedSalads],pastas:[...selectedPastas],total:c.total};
feedback.textContent='Sending request…';const {error}=await api.from('bookings').insert(b);feedback.textContent=error?'Could not send. Please call (818) 749-5050. '+(error.code==='23505'?'This date is unavailable.':''): 'Request received! We will contact you to confirm availability. No payment has been charged.';if(!error)$('bookingForm').reset();}
$('bookingForm')?.addEventListener('submit',sendBooking,true);
load();
})();