<template>
  <div class="filter__sidebar">
    <div class="container">
      <div class="filter__item">
        <div class="title">Product Category</div>
        <ul>
          <li>Bath & Body <span>(12)</span></li>
          <li>Skincare <span>(10)</span></li>
          <li>Makeup <span>(8)</span></li>
          <li>Fragrance <span>(14)</span></li>
          <li>Hair <span>(0)</span></li>
        </ul>
      </div>
      <div class="filter__item">
        <div class="title">Filter by price</div>
        <v-range-slider max="100" min="-100"></v-range-slider>
        <v-btn color="accent" elevation="2" small></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filter__sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter__sidebar .container {
  position: -webkit-sticky;
  position: sticky;
  top: 130px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.filter__sidebar .filter__item .title {
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.filter__sidebar .filter__item ul {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 14px;
  color: var(--textColor);
}

.filter__sidebar .filter__item ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter__sidebar .filter__item ul li span {
  font-size: 10px;
  color: var(--textColor);
}
</style>
