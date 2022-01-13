<template>
  <div class="success-checkmark">
    <div class="check-icon">
      <span class="icon-line line-tip"></span>
      <span class="icon-line line-long"></span>
      <div class="icon-circle"></div>
      <div class="icon-fix"></div>
    </div>
  </div>
  <div></div>
</template>

<style lang="scss" scoped>
/**
 * Extracted from: SweetAlert
 * Modified by: Istiak Tridip
 */
$my-unit: 0.4;
.success-checkmark {
  width: 80 * $my-unit + px;
  height: 115 * $my-unit + px;
  margin: 0 auto;

  .check-icon {
    width: 80 * $my-unit + px;
    height: 80 * $my-unit + px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4 * $my-unit + px solid #4caf50;

    &::before {
      top: 3 * $my-unit + px;
      left: -2 * $my-unit + px;
      width: 30 * $my-unit + px;
      transform-origin: 100% 50%;
      border-radius: 100 * $my-unit + px 0 0 100 * $my-unit + px;
    }

    &::after {
      top: 0;
      left: 30 * $my-unit + px;
      width: 60 * $my-unit + px;
      transform-origin: 0 50%;
      border-radius: 0 100 * $my-unit + px 100 * $my-unit + px 0;
      animation: rotate-circle 4.25s ease-in;
    }

    &::before,
    &::after {
      content: "";
      height: 100 * $my-unit + px;
      position: absolute;
      //   background: #ffffff;
      transform: rotate(-45deg);
    }

    .icon-line {
      height: 5 * $my-unit + px;
      background-color: #4caf50;
      display: block;
      border-radius: 2 * $my-unit + px;
      position: absolute;
      z-index: 10;

      &.line-tip {
        top: 46 * $my-unit + px;
        left: 14 * $my-unit + px;
        width: 25 * $my-unit + px;
        transform: rotate(45deg);
        animation: icon-line-tip 0.75s;
      }

      &.line-long {
        top: 38 * $my-unit + px;
        right: 8 * $my-unit + px;
        width: 47 * $my-unit + px;
        transform: rotate(-45deg);
        animation: icon-line-long 0.75s;
      }
    }

    .icon-circle {
      top: -4 * $my-unit + px;
      left: -4 * $my-unit + px;
      z-index: 10;
      width: 80 * $my-unit + px;
      height: 80 * $my-unit + px;
      border-radius: 50%;
      position: absolute;
      box-sizing: content-box;
      border: 4 * $my-unit + px solid rgba(76, 175, 80, 0.5);
    }

    .icon-fix {
      top: 8 * $my-unit + px;
      width: 5 * $my-unit + px;
      left: 26 * $my-unit + px;
      z-index: 1;
      height: 85 * $my-unit + px;
      position: absolute;
      transform: rotate(-45deg);
      //   background-color: #ffffff;
    }
  }
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1 * $my-unit + px;
    top: 19 * $my-unit + px;
  }
  54% {
    width: 0;
    left: 1 * $my-unit + px;
    top: 19 * $my-unit + px;
  }
  70% {
    width: 50 * $my-unit + px;
    left: -8 * $my-unit + px;
    top: 37 * $my-unit + px;
  }
  84% {
    width: 17 * $my-unit + px;
    left: 21 * $my-unit + px;
    top: 48 * $my-unit + px;
  }
  100% {
    width: 25 * $my-unit + px;
    left: 14 * $my-unit + px;
    top: 45 * $my-unit + px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46 * $my-unit + px;
    top: 54 * $my-unit + px;
  }
  65% {
    width: 0;
    right: 46 * $my-unit + px;
    top: 54 * $my-unit + px;
  }
  84% {
    width: 55 * $my-unit + px;
    right: 0 * $my-unit + px;
    top: 35 * $my-unit + px;
  }
  100% {
    width: 47 * $my-unit + px;
    right: 8 * $my-unit + px;
    top: 38 * $my-unit + px;
  }
}
</style>