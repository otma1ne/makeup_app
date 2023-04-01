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
        <input class="price__filter" type="range" :value="filterPrice" />
        <div class="price__info">
          <p>Price : $<span>0</span> - $<span>100</span></p>
          <button class="primary__btn">Filter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterPrice: 100,
    };
  },
};
</script>

<style>
.filter__sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter__sidebar .container {
  width: 100%;
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

.filter__sidebar .filter__item .price__filter {
  margin-top: 30px;
  width: 100%;
  height: 4px;
  accent-color: black;
}

.filter__sidebar .filter__item .price__info {
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter__sidebar .filter__item .price__info span {
  font-weight: 500;
}
.filter__sidebar .filter__item .price__info .primary__btn {
  padding: 4px 12px;
  font-size: 12px;
}
</style>
