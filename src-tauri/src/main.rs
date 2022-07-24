#![cfg_attr(
  all(not(debug_assertions), target_os = "linux"),
  linux_subsystem = "linux"
)]

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
