# engineering-playground

## Docker permissions

The `app` service runs with host-style user/group IDs (`UID`/`GID`) to avoid root-owned files on bind mounts. This prevents permission errors when deleting files in `./server` while the container is running.