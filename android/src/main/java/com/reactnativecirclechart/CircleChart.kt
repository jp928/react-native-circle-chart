package com.reactnativecirclechart

import android.graphics.Color
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import android.view.ViewGroup
import androidx.constraintlayout.widget.ConstraintLayout
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.UIManagerModule
import com.mikhaellopez.circularprogressbar.CircularProgressBar

class CircleChart : ViewGroupManager<ViewGroup>() {
  override fun getName(): String {
    return "CircleChart"
  }

  override fun createViewInstance(reactContext: ThemedReactContext): ViewGroup {
    val layout = ConstraintLayout(reactContext)
    val constraintLayout=
      reactContext
        .currentActivity?.layoutInflater?.inflate(R.layout.circle, layout, false)
        as ConstraintLayout

    val circleProgressBar = constraintLayout.getViewById(R.id.circularProgressBar) as CircularProgressBar

    circleProgressBar.apply {
      progress = 65f
      // or with animation
      setProgressWithAnimation(65f, 1000) // =1s

      // Set Progress Max
      progressMax = 200f

      // Set ProgressBar Color
      progressBarColor = Color.BLACK
      // or with gradient
      progressBarColorStart = Color.GRAY
      progressBarColorEnd = Color.RED
      progressBarColorDirection = CircularProgressBar.GradientDirection.TOP_TO_BOTTOM

      // Set background ProgressBar Color
      backgroundProgressBarColor = Color.GRAY
      // or with gradient
      backgroundProgressBarColorStart = Color.WHITE
      backgroundProgressBarColorEnd = Color.RED
      backgroundProgressBarColorDirection = CircularProgressBar.GradientDirection.TOP_TO_BOTTOM

      // Set Width
      progressBarWidth = 7f // in DP
      backgroundProgressBarWidth = 3f // in DP

      // Other
      roundBorder = true
      startAngle = 180f
      progressDirection = CircularProgressBar.ProgressDirection.TO_RIGHT
    }

    return layout;
  }
}
