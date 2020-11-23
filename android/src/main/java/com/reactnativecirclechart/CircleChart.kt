package com.reactnativecirclechart

import android.graphics.Color
import androidx.annotation.Nullable
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.mikhaellopez.circularprogressbar.CircularProgressBar


class CircleChart : SimpleViewManager<CircularProgressBar>() {
  private lateinit var circleProgressBar: CircularProgressBar

  override fun getName(): String {
    return "CircleChart"
  }

  override fun createViewInstance(reactContext: ThemedReactContext): CircularProgressBar {
    this.circleProgressBar = CircularProgressBar(reactContext, null)

    this.circleProgressBar.apply {
      progress = 0f
      progressMax = 100f
      roundBorder = true
      startAngle = 0f
      // or with gradient
      progressBarColorStart = Color.parseColor("#03bfd7")
      progressBarColorEnd = Color.parseColor("#10395e")
      progressBarColorDirection = CircularProgressBar.GradientDirection.TOP_TO_BOTTOM
      progressDirection = CircularProgressBar.ProgressDirection.TO_RIGHT

      // Set background ProgressBar Color
      backgroundProgressBarColor = Color.parseColor("#BEC0C2")

      progressBarWidth = 6f // in DP
      backgroundProgressBarWidth = 6f // in DP
    }
    return circleProgressBar
  }

  @ReactProp(name = "progress", defaultFloat = 0f)
  fun setProgress(view: CircularProgressBar, @Nullable progress: Float) {
    view.setProgressWithAnimation(progress, 400)
  }

  @ReactProp(name = "backgroundProgressBarColorStart")
  fun setBackgroundProgressBarColorStart(view: CircularProgressBar, @Nullable backgroundProgressBarColorStart: String) {
    view.backgroundProgressBarColorStart = Color.parseColor(backgroundProgressBarColorStart)
  }

  @ReactProp(name = "backgroundProgressBarColorEnd")
  fun setBackgroundProgressBarColorEnd(view: CircularProgressBar, @Nullable backgroundProgressBarColorEnd: String) {
    view.backgroundProgressBarColorEnd = Color.parseColor(backgroundProgressBarColorEnd)
  }

  @ReactProp(name = "barSize", defaultFloat = 6f)
  fun setSize(view: CircularProgressBar, @Nullable barSize: Float) {
    view.progressBarWidth = barSize
    view.backgroundProgressBarWidth = barSize;
  }

}
