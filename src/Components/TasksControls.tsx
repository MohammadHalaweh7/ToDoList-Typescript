import React from "react"

type Props = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  setToken: React.Dispatch<React.SetStateAction<string>>
  tasksCount: number
  completedTasksCount: number
  toggle: boolean
  token: string
}

export default function TasksControls({
  setToggle,
  setToken,
  tasksCount,
  completedTasksCount,
  toggle,
  token
}:Props) {

  return (
    <>
      <div className='controlBar'>
        <div className='form-check form-switch'>
          <input
            className='form-check-input'
            type='checkbox'
            id='toggledBtn'
            value={toggle.toString()}
            onChange={(e) => {
              console.log(e.target.checked)
              setToggle(e.target.checked)
            }}
          />
          <label className='form-check-label' htmlFor='toggledBtn'>
            Filter by completed tasks
          </label>
        </div>

        <div>
          <input
          value={token}
            onChange={(e) => {
              setToken(e.target.value)
            }}
            type='text'
            placeholder='Search by task name... '
            className='form-control mt-5 mb-5'
          ></input>
        </div>
        <b>
          TODO: {tasksCount} &nbsp;Confirmed: {completedTasksCount}
        </b>

        <div>
          <button
            type='button'
            className='btn btn-primary '
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <i className='fa-solid fa-plus'></i>
          </button>
        </div>
      </div>
    </>
  )
}
