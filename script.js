
const districtMap = {
  "Punjab": ["Lahore", "Rawalpindi", "Multan"],
  "Sindh": ["Karachi", "Hyderabad", "Sukkur"],
  "KPK": ["Peshawar", "Abbottabad", "Swat"],
  "Balochistan": ["Quetta", "Gwadar", "Khuzdar"],
  "AJK": ["Muzaffarabad", "Mirpur", "Kotli"],
  "GB": ["Gilgit", "Skardu", "Hunza"]
};

document.getElementById('province-filter').addEventListener('change', function () {
  const province = this.value;
  const districtSelect = document.getElementById('district-filter');
  districtSelect.innerHTML = '<option value="">Select District</option>';
  if (province && districtMap[province]) {
    districtMap[province].forEach(district => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
});

function filterJobs(type) {
  const province = document.getElementById('province-filter').value;
  const district = document.getElementById('district-filter').value;

  document.querySelectorAll('.job-card').forEach(card => {
    const matchType = card.dataset.type === type;
    const matchProvince = !province || card.dataset.province === province;
    const matchDistrict = !district || card.dataset.district === district;

    if (matchType && matchProvince && matchDistrict) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
