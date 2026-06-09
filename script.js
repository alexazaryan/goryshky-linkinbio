// Background floating particles
const pc = document.getElementById("particles");
const px = pc.getContext("2d");
pc.width = window.innerWidth;
pc.height = window.innerHeight;
window.addEventListener("resize", () => {
   pc.width = window.innerWidth;
   pc.height = window.innerHeight;
});
const dots = [];
for (let i = 0; i < 60; i++) {
   dots.push({
      x: Math.random() * pc.width,
      y: Math.random() * pc.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random(),
   });
}
function drawParticles() {
   px.clearRect(0, 0, pc.width, pc.height);
   dots.forEach((d) => {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0) d.x = pc.width;
      if (d.x > pc.width) d.x = 0;
      if (d.y < 0) d.y = pc.height;
      if (d.y > pc.height) d.y = 0;
      d.a += 0.01;
      const alpha = 0.3 + 0.2 * Math.sin(d.a);
      px.beginPath();
      px.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      px.fillStyle = `rgba(232,168,48,${alpha})`;
      px.fill();
   });
   requestAnimationFrame(drawParticles);
}
drawParticles();

document.querySelectorAll(".soc-btn").forEach((el) => {
   el.addEventListener("touchstart", () => {}, { passive: true });
});
