/* eslint-disable react/prop-types */

const Alert = ({alert}) => {
  return (
    <div className={`${alert.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r text-center p-3 rounded-xl uppercase font-bold text-white text-sm mb-10`}>
        {alert.msg}
    </div>
  )
}

export default Alert    