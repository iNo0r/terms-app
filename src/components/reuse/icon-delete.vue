<template>
  <svg
    :width="size * (9 / 24) + 'rem'"
    :height="size + 'rem'"
    viewBox="0 0 19 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4584 6H17.4167V8H15.8334V21C15.8334 21.2652 15.75 21.5196 15.6015 21.7071C15.453 21.8946 15.2517 22 15.0417 22H3.95837C3.74841 22 3.54705 21.8946 3.39858 21.7071C3.25012 21.5196 3.16671 21.2652 3.16671 21V8H1.58337V6H5.54171V3C5.54171 2.73478 5.62512 2.48043 5.77358 2.29289C5.92205 2.10536 6.12341 2 6.33337 2H12.6667C12.8767 2 13.078 2.10536 13.2265 2.29289C13.375 2.48043 13.4584 2.73478 13.4584 3V6ZM7.12504 11V17H8.70837V11H7.12504ZM10.2917 11V17H11.875V11H10.2917ZM7.12504 4V6H11.875V4H7.12504Z"
      fill="white"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      default: 2,
      //   type: Number,
    },
  },
};
</script>